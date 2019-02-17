# Backend API för ramverk2-mesida

[![Build Status](https://travis-ci.org/emsa16/ramverk2-api.svg?branch=master)](https://travis-ci.org/emsa16/ramverk2-api)
[![CircleCI](https://circleci.com/gh/emsa16/ramverk2-api.svg?style=svg)](https://circleci.com/gh/emsa16/ramverk2-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/05c9f378777ee2bf5a75/maintainability)](https://codeclimate.com/github/emsa16/ramverk2-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/05c9f378777ee2bf5a75/test_coverage)](https://codeclimate.com/github/emsa16/ramverk2-api/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/emsa16/ramverk2-api?branch=master)](https://bettercodehub.com/results/emsa16/ramverk2-api)

## Installera projektet
Detta är ett node.js-projekt, så det kräver att node är installerat.

    $ git clone https://github.com/emsa16/ramverk2-api
    $ cd ramverk2-api
    $ npm|make install
    $ npm|make test

Såväl `npm` som `make` är möjliga att köra tillsammans med kommandona `install` och `test`

## Kör igång Express-servern
    $ [env DBWEBB_PORT=XXXX] npm start     # DBWEBB_PORT anger vilken port servern körs på, default är 3000

## Köra projektet i Docker
    $ npm run|make node1            # node 9-alpine (port 8093)
    $ npm run|make node2            # node 8-alpine (port 8089)
    $ npm run|make node3            # node 6-alpine (port 8061)
    $ npm run|make docker-start     # Kör alla tre containers  (se portar ovan)
    $ npm run|make docker-stop      # Stoppar alla aktiva containers
    $ npm run|make docker-build     # Bygger ovan nämnda images från respektive Dockerfile

Alla dessa kommandon kan alltså också köras med både `make` och `npm run`.

## Ladda ner projektets image
https://store.docker.com/community/images/emsa16/ramverk2-me

BTH 2019
