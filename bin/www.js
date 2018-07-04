"use strict";

const app           = require('../app');
const http          = require('http');
const mongoClient   = require('mongodb').MongoClient;

// Create the HTTP server
const server = http.createServer(app);

// Create MongoDB connection
mongoClient.connect(app.get('url'), (err, client) => {
    if (err) throw err;

    let db = client.db(app.get('dbName'));

    // Defines collections
    exports.recipe = db.collection("recipe");

    // Server GO!
    server.listen(app.get('port'), app.get('host'), function() {
        console.info('Server (%s mode) listening on port: %s ', app.get('env'), server.address().port);
    });
});
