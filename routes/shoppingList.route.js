"use strict";

const config                    = require('../config');
const express                   = require('express');
const router                    = express.Router(config.router.options);
const shoppingListController    = require('../controllers/shoppingList.controller');

router.get('/', shoppingListController.getItems);
router.get('/:id', shoppingListController.getItem);
router.post('/', shoppingListController.addItem);
router.patch('/:id', shoppingListController.updateItem);
router.delete('/:id', shoppingListController.deleteItem);

module.exports = router;