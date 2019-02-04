/*eslint no-unused-vars: "off"*/
"use strict";

var express = require('express');
var router = express.Router();

// JSON API
router.get("/", (req, res) => {
    const data = {
        data: {
            msg: "JSON API"
        }
    };

    res.json(data);
});

router.get("/author", (req, res) => {
    const data = {
        data: {
            msg: "Emil Sandberg"
        }
    };

    res.json(data);
});

module.exports = router;
