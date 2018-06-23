"use strict";

const Recipe = require('../models/recipe.model');

/**
 * Get all recipes
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getRecipes = function(req, res) {
    res.status(200)
       .json(Recipe.getRecipes());
};

/**
 * Get a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getRecipe = function(req, res) {
    res.status(200)
       .json(Recipe.getRecipe(parseInt(req.params.id)));
};

/**
 * Creates a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.createRecipe = function(req, res) {
    res.status(200)
       .json(Recipe.createRecipe(req.body));
};

/**
 * Updates a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.updateRecipe = function(req, res) {
    res.status(200)
       .json(Recipe.updateRecipe(parseInt(req.params.id), req.body));
};

/**
 * Deletes a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.deleteRecipe = function(req, res) {
    res.status(200)
       .json(Recipe.deleteRecipe(parseInt(req.params.id)));
};