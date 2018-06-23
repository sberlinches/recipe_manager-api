"use strict";

const config        = require('./config');
const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const compression   = require('compression');
const router        = require('./routes');
const app           = express();

app.use(bodyParser.json(config.bodyParser.json));
app.use(bodyParser.urlencoded(config.bodyParser.urlencoded));
app.use(cors(config.cors));
app.use(compression());
app.use(router);

app.set('host', config.host);
app.set('port', config.port);
app.set('router', config.router);

module.exports = app;