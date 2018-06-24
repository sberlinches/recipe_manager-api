const request = require('request');
const server = require('../bin/www');

let uri = "http://localhost:8080/api/recipe/";
let jsonContentType = "application/json; charset=utf-8";
let options = {json: true, body: {}};

describe('Recipe', () => {

    /**
     * Gets all recipes
     */
    it('get all', (done) => {

        request.get(uri, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            done();
        });
    });

    /**
     * Posts a new recipe
     */
    it('post', (done) => {

        let name = "test";
        options.body.name = name;

        request.post(uri, options, function (error, response, body) {
            options.body.id = body.id;
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(body.name).toBe(name);
            done();
        });
    });

    /**
     * Gets the recipe created
     */
    it('get', (done) => {

        request.get(uri + options.body.id, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(JSON.parse(body).name).toBe(options.body.name); //TODO: Unexpectedly, body is a string, so has to be parsed
            done();
        });
    });

    /**
     * Updates the just created recipe
     */
    it('patch', (done) => {

        let name = "updated";
        options.body.name = name;

        request.patch(uri + options.body.id, options, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(body.name).toBe(name);
            done();
        });
    });

    /**
     * Deletes the just created and updated recipe
     */
    it('delete', (done) => {

        request.delete(uri + options.body.id, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(body).toBe('1');
            done();
        });
    });
});

