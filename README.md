# Backend API för redovisa-sidan i kursen ramverk2

[![Build Status](https://travis-ci.org/emsa16/ramverk2-api.svg?branch=master)](https://travis-ci.org/emsa16/ramverk2-api)
[![CircleCI](https://circleci.com/gh/emsa16/ramverk2-api.svg?style=svg)](https://circleci.com/gh/emsa16/ramverk2-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/05c9f378777ee2bf5a75/maintainability)](https://codeclimate.com/github/emsa16/ramverk2-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/05c9f378777ee2bf5a75/test_coverage)](https://codeclimate.com/github/emsa16/ramverk2-api/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/emsa16/ramverk2-api?branch=master)](https://bettercodehub.com/results/emsa16/ramverk2-api)

Detta repo är ena halvan av min redovisa-sida. Detta är backend-delen och är byggd med Express. Databasmodulen använder sig av Mongo. Autentisering sköts med hjälp av JSON Webtokens och lösenord med bcrypt. Det finns Docker-filer tillgängliga för att kunna köra projektet i olika målmiljöer.

Servern erbjuder ett enkelt JSON API med innehåll till redovisa-sidan. JSON-svaren innehåller också anvisningar om vilka router som finns tillgängliga.


## Krav
- Node
- npm
- mongo-databas som är igång och servar data från katalogen ./data/db. Med environment-variabeln `DBWEBB_DSN` kan man ange adress till Mongo-databasen (standard är mongodb://localhost:27017/meapp).
- environment-variabeln `JWT_SECRET`, för att JWT-tokens ska kunna skapas och autentiseringar skötas


## Installation
    $ git clone https://github.com/emsa16/ramverk2-api
    $ cd ramverk2-api
    $ npm install


## Test
    $ npm test

Se även kommandon för att köra tester i Docker nedan.


## Användning
`DBWEBB_PORT` anger vilken port servern körs på, standard är 8080.

    $ [DBWEBB_PORT=XXXX] npm start          # Startar en utvecklingsserver med nodemon
    $ [DBWEBB_PORT=XXXX] npm run production # Startar produktionsserver


## Docker
    $ npm run docker-start     # Startar alla containers (se nedan)
    $ npm run docker-stop      # Stoppar alla aktiva containers
    $ npm run docker-build     # Bygger alla images nedan från respektive Dockerfile

    $ npm run docker-node1     # node latest-alpine (testa på http://localhost:8110)
    $ npm run docker-node2     # node 10-alpine (testa på http://localhost:8100)
    $ npm run docker-node3     # node 8-alpine (testa på http://localhost:8080)
    $ npm run docker-mongodb   # mongodb, körs på port 27017, databasen lagras i ./data/db

    $ npm run test-node1       # Kör npm test inuti node1-containern
    $ npm run test-node2       # Kör npm test inuti node2-containern
    $ npm run test-node3       # Kör npm test inuti node3-containern

Projektets Docker-image kan laddas ned [här](https://store.docker.com/community/images/emsa16/ramverk2-me).

BTH 2019
