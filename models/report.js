/**
 * Report CRUD module
 */
"use strict";

const db = require('./db.js');



const report = {
    create: async function(res, body) {
        const doc = {
            "kmom": body.kmom,
            "title": body.title,
            "content": body.content
        };

        await db.insertOne("reports", doc);
        const message = "Report created";

        console.log(message);
        return res.status(201).json({message: message});
    },

    get: async function(res, params) {
        const kmom = params.kmom;
        const projection = {'title': 1, 'content': 1, '_id': 0};
        const result = await db.find("reports", {"kmom": kmom}, projection, 1);
        const data = result[0];

        return res.json(data);
    },

    getAll: async function(res) {
        const projection = {'kmom': 1, '_id': 0};
        const result = await db.find("reports", {}, projection, 100);
        const routes = await result.map(x => "kmom/" + x.kmom);
        const data = {
            title: "Redovisningar",
            routes: routes
        };

        return res.json(data);
    },

    update: async function(res, body) {
        const kmom = body.kmom;
        const doc = {
            "title": body.title,
            "content": body.content
        };

        await db.updateOne("reports", {'kmom': kmom}, doc);
        const message = "Report updated";

        console.log(message);
        return res.json({message: message});
    },

    delete: async function(res, body) {
        const kmom = body.kmom;

        await db.deleteOne("reports", {'kmom': kmom});
        const message = "Report deleted";

        console.log(message);
        return res.json({message: message});
    }
};



module.exports = report;
