"use strict";

const config    = require('../config');
const express   = require('express');
const router    = express.Router(config.router.options);

const mainRoute     = require('./main.route');
const recipeRoute   = require('./recipe.route');

router.use('/', mainRoute);
router.use('/recipe', recipeRoute);
// All routes defined above are under /api
router.use('/api', router);

module.exports = router;