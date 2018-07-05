"use strict";

const ObjectId  = require('mongodb').ObjectId;
const db        = require('../bin/www');

/**
 * Gets all items from the fridge
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getItems = function(req, res) {

    db.fridge.find().toArray(function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Gets an item from the fridge
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.getItem = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};

    db.fridge.findOne(query, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Adds an item to the fridge
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.addItem = function(req, res) {

    db.fridge.insertOne(req.body, null, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result.ops[0]);
    });
};

/**
 * Updates an item from the fridge
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.updateItem = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};
    let update = {$set: req.body};
    let options = {returnNewDocument: true};

    db.fridge.findOneAndUpdate(query, update, options, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};

/**
 * Deletes an item from the fridge
 * @param req HTTP request argument
 * @param res HTTP response argument
 */
exports.deleteItem = function(req, res) {

    let query = {_id: ObjectId(req.params.id)};

    db.fridge.findOneAndDelete(query, function (err, result) {
        if (err) res.status(500).json(err);

        res.status(200)
            .json(result);
    });
};