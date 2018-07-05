"use strict";

const config            = require('../config');
const express           = require('express');
const router            = express.Router(config.router.options);
const fridgeController  = require('../controllers/fridge.controller');

router.get('/', fridgeController.getItems);
router.get('/:id', fridgeController.getItem);
router.post('/', fridgeController.addItem);
router.patch('/:id', fridgeController.updateItem);
router.delete('/:id', fridgeController.deleteItem);

module.exports = router;