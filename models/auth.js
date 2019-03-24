/**
 * Authentication
 */
"use strict";

const db = require('./db.js');

//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



const auth = {
    register: async function(res, body) {
        const username = body.username;
        const password = body.password;

        if (!username || !password) {
            console.log("Username or password missing");
            return res.status(401).json({message: "Username or password missing"});
        }

        const hash = await bcrypt.hash(password, saltRounds);
        const doc = {
            "username": username,
            "hash": hash
        };

        await db.insertOne("users", doc);
        console.log("new user registered");
        return res.status(201).json({message: "User registered"});
    },



    login: async function(res, body) {
        const username = body.username;
        const password = body.password;

        if (!username || !password) {
            return res.status(401).json({message: "Username or password missing"});
        }

        const result = await db.find("users", {username: username}, {}, 1);

        if (!result.length) {
            console.log("User not found");
            return res.status(401).json({message: "User not found"});
        }
        const user = result[0];
        const match = await bcrypt.compare(password, user.hash);

        if (!match) {
            console.log("Wrong password");
            return res.status(401).json({message: "Wrong password"});
        }

        const payload = { uid: user._id };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h'});

        console.log(token);
        return res.json({token: token});
    },



    checkToken: async function(req, res, next) {
        const token = req.headers['x-access-token'];

        if (!token) {
            console.log("Missing token");
            return res.status(401).json({message: "Missing token"});
            // errors: {
            //     status: 401,
            //     source: req.path,
            //     title: "No token",
            //     detail: "No token provided in request headers"
            // }
        }

        jwt.verify(token, jwtSecret, async function(err, decoded) {
            if (err) {
                console.log("Token not valid");
                return res.status(401).json({message: "Token not valid"});
            }

            const uid = decoded.uid;

            if (uid) {
                const res = await db.findByID("users", uid, {}, 1);

                if (!res.length) {
                    console.log("Missing user");
                    res.status(500).json({message: "Missing user"});
                }

                console.log("Valid token");
                // req.user = {};
                // req.user.email = decoded.email;
                next();
                // return undefined;
            } else {
                console.log("Missing uid");
            }
        });
    }
};



module.exports = auth;
