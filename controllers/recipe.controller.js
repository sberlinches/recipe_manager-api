"use strict";

const ObjectId  = require('mongodb').ObjectId;
const db        = require('../bin/www');

/**
 * Gets all recipes
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getRecipes = function(req, res) {

    db.recipe.find().toArray(function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Gets a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getRecipe = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};

    db.recipe.findOne(query, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Creates a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.createRecipe = function(req, res) {

    db.recipe.insertOne(req.body, null, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result.ops);
    });
};

/**
 * Updates a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.updateRecipe = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};
    let update = {$set: req.body};
    let options = {returnNewDocument: true};

    db.recipe.findOneAndUpdate(query, update, options, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Deletes a recipe
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.deleteRecipe = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};

    db.recipe.findOneAndDelete(query, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};