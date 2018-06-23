"use strict";

const config            = require('../config');
const express           = require('express');
const router            = express.Router(config.router.options);
const mainController    = require('../controllers/main.controller');

router.get('/', mainController.handshake);

module.exports = router;