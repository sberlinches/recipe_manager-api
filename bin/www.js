"use strict";

const app           = require('../app');
const http          = require('http');
const mongoClient   = require('mongodb').MongoClient;
const initDB        = require('./initDB');

// Create the HTTP server
const server = http.createServer(app);

// Create MongoDB connection
mongoClient.connect(app.get('url'), (err, client) => {
    if (err) throw err;

    let db = client.db(app.get('dbName'));

    // Defines collections
    exports.fridge = db.collection("fridge");
    exports.recipe = db.collection("recipe");
    exports.shoppingList = db.collection("shoppingList");

    // Initializes the collections (if it were necessary)
    initDB.initFridge();
    initDB.initRecipe();

    // Server GO!
    server.listen(app.get('port'), app.get('host'), function() {
        console.info('Server (%s mode) listening on port: %s ', app.get('env'), server.address().port);
    });
});
