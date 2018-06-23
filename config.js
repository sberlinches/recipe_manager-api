'use strict';

const env           = process.env.NODE_ENV;
const parameters    = require('./parameters.json')[env];
const isProduction  = (env === 'production');

module.exports = {
    host: parameters.host,
    port: process.env.PORT || parameters.port,
    bodyParser: {
        json: {},
        urlencoded: {
            extended: true
        }
    },
    compression: true,
    router: {
        options: {
            caseSensitive: false,
            mergeParams: false,
            strict: false
        }
    }
};