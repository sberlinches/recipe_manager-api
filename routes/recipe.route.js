"use strict";

const config            = require('../config');
const express           = require('express');
const router            = express.Router(config.router.options);
const recipeController    = require('../controllers/recipe.controller');

router.get('/', recipeController.getRecipes);
router.get('/:id(\\d+)', recipeController.getRecipe);
router.post('/', recipeController.createRecipe);
router.patch('/:id(\\d+)', recipeController.updateRecipe);
router.delete('/:id(\\d+)', recipeController.deleteRecipe);

module.exports = router;