/*eslint no-unused-vars: "off", max-len: ["error", { "ignoreStrings": true }]*/
"use strict";

const express = require('express');
const router = express.Router();

const auth = require('../models/auth');
const report = require('../models/report');

// JSON API
router.get("/", (req, res) => {
    const data = {
        title: "JSON API",
        routes: [
            "index",
            "about",
            "app",
            "login",
            "register",
            "reports"
        ]
    };

    res.json(data);
});

router.get("/index", (req, res) => {
    const data = {
        msg: '<h1>En värld av ramverk</h1><p><img src="img/me.jpg" alt="profile image"></p><h2>Min bakgrund</h2><p>Jag har tidigare verkat inom teater som skådespelare, regissör och dramapedagog. Jag har drivit en egen teatergrupp sedan 2011 med varierande grad av aktivitet. Hösten 2015 fick jag plötsligt idén att jag skulle prova något nytt. Delvis inspirerad av <a href="http://www.smbc-comics.com/?id=2722">denna</a>, delvis driven av frustration över min dåvarande livssituation gick jag igenom vilka alternativ som fanns att plugga på distans och programmering fångade av någon orsak mitt intresse.</p><p>Så började jag då alltså studera kurspaketet <em>Webbutveckling och programmering</em> i januari 2016. Ganska snabbt märkte jag att jag gillade det och att jag faktiskt var kapabel att lära mig det också. Efter ett år hoppade jag in i distansprogrammet och där är jag nu. För att försörja mig jobbar jag deltid som community manager.</p><h2>En programmerare i vardande</h2><p>Jag går andra året på distansprogrammet i webbprogrammering vid Blekinge Tekniska Högskola. Hösten 2017 kommer att ägnas åt att fördjupa oss i ramverk inom PHP och Javascript, matematisk modellering samt göra vårt första egna &quot;riktiga&quot; projekt.</p><p>Färdigheter:</p><ul><li>Python<ul><li>OOP</li><li>unit testing</li><li>pydoc</li><li>Flask + Jinja2</li><li>SQLAlchemy</li></ul></li><li>Javascript<ul><li>Node.js</li><li>JSDoc</li><li>Ajax</li><li>lite hybrid webapp med Cordova</li><li>ramverk: jQuery Mobile, Mithril, Bootstrap</li><li>templatespråk: Handlebars, Mustache</li></ul></li><li>PHP<ul><li>OOP</li><li>Composer</li><li>PHPUnit</li></ul></li><li>SQL<ul><li>SQLite</li><li>MySQL/MariaDB</li></ul></li><li>HTML, CSS &amp; LESS</li><li>webappar</li><li>MVC</li><li>SPA</li><li>REST</li><li>lite Apache webbserver &amp; Virtual Hosts</li><li>UML</li><li>Regex</li><li>Make</li><li>Bash<ul><li>shell-skript</li><li>tmux</li></ul></li><li>VirtualBox</li><li>Git &amp; Github</li><li>Markdown</li><li>Skriva för webben</li><li>Responsiv webbdesign</li></ul>'
    };

    res.json(data);
});

router.get("/about", (req, res) => {
    const data = {
        msg: '<h1>Om denna sida</h1><p><img src="img/1200px-Node.js_logo.svg.png" alt="Node.js logo"></p><p>Denna sida är byggd med React och Express. React servas som statiskt innehåll på me.emilsandberg.com och Express kör på api.emilsandberg.com, där alla texter för de olika sidorna ligger lagrade.</p><p>Denna sida är en del av kursen <a href="https://dbwebb.se/kurser/ramverk2"><em>ramverk2</em></a> på Blekinge Tekniska Högskola.</p><p>Kursen omfattar:</p><ul><li>Virtualisering med Docker för utveckling, test och driftsättning.</li><li>Ramverksbaserade serverlösning, backend med JavaScript/PHP.</li><li>Frontendlösningar med web, SPA (single page application) och desktop.</li><li>Kopplingar mot databaser.</li><li>Testdriven utveckling och tekniker för enhetstestning.</li><li>Automatiserad testning och byggning.</li><li>Driftsättning och innebörden av devops.</li><li>Relaterade verktyg och tekniker.</li></ul><p><a href="https://github.com/emsa16/ramverk2-me">Frontend-delen på Github</a></p><p><a href="https://github.com/emsa16/ramverk2-api">Backend-delen på Github</a></p>'
    };

    res.json(data);
});

router.get("/app", (req, res) => {
    const data = {
        msg: '<h1>Realtime game app</h1><p>Exakt innehåll och format är ännu oklart, men någon form av realtidsspel med flera simultanspelare är tanken. Om realtidsdelen krånglar så är det möjligt att det istället blir ett mer statiskt spel med en tillhörande chatt.</p><p>Jag har inte bestämt mig ännu för hur jag kommer att implementera realtidsaspekten i min app. Jag behöver veta mer om vad vi ännu ska lära oss innan jag kan ta beslut om omfattning och innehåll för min app. Det jag just nu funderar på är någon sorts spelchattrum, där användare har avatarer och att de kan gå runt i en definierad virtuell miljö och skriva saker som dyker upp som pratbubblor. Detta kan visa sig övermäktigt, vi får se.</p><p>Appen har två separata delar, en frontend och en backend. Backend är byggd i Express och tanken är att den ska erbjuda någon form av data och/eller komputationer genom ett REST API. Frontend är gjord i React och är tänkt till webbläsare för mobil och desktop.</p><p>Än så länge finns det endast skelett för frontend och backend och appen är inte uppe och snurrar någonstans.</p><p><a href="https://github.com/emsa16/realtimegame-frontend">Frontend-repo</a></p><p><a href="https://github.com/emsa16/realtimegame-backend">Backend-repo</a></p>'
    };

    res.json(data);
});

router.get('/register', async (req, res) => {
    res.status(405).json({msg: "This route only supports POST requests."});
});

router.post('/register', async (req, res) => {
    try {
        auth.register(res, req.body);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});

router.get('/login', async (req, res) => {
    res.status(405).json({msg: "This route only supports POST requests."});
});

router.post('/login', async (req, res) => {
    try {
        auth.login(res, req.body);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});

//Just to test that token is valid and working
router.get('/secret',
    async (req, res, next) => {
        try {
            auth.checkToken(req, res, next);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    },
    async (req, res) => {
        try {
            res.json({msg: "Secret content"});
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    }
);

router.get("/reports", (req, res) => {
    try {
        report.getAll(res);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});

router.get("/reports/kmom", (req, res) => {
    try {
        report.getAllKmom(res);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});

router.get("/reports/kmom/:kmom", async (req, res) => {
    try {
        report.get(res, req.params);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});

router.post('/reports/create',
    async (req, res, next) => {
        try {
            auth.checkToken(req, res, next);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    },
    async (req, res) => {
        try {
            report.create(res, req.body);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    }
);

router.post('/reports/update',
    async (req, res, next) => {
        try {
            auth.checkToken(req, res, next);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    },
    async (req, res) => {
        try {
            report.update(res, req.body);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    }
);

router.post('/reports/delete',
    async (req, res, next) => {
        try {
            auth.checkToken(req, res, next);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    },
    async (req, res) => {
        try {
            report.delete(res, req.body);
        } catch (err) {
            console.log(err);
            res.status(500).json({message: err});
        }
    }
);

module.exports = router;
