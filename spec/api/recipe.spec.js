const request = require('request');

let uri = "http://localhost:8080/api/recipe/";
let jsonContentType = "application/json; charset=utf-8";
let id;
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

            id = body._id;
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

        request.get(uri + id, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(JSON.parse(body).name).toBe(options.body.name); //Unexpectedly, body is a string, so has to be parsed
            done();
        });
    });

    /**
     * Updates the just created recipe
     */
    it('patch', (done) => {

        let name = "updated";
        options.body.name = name;

        request.patch(uri + id, options, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(body.value.name).toBe(name);
            done();
        });
    });

    /**
     * Deletes the just created and updated recipe
     */
    it('delete', (done) => {

        request.delete(uri + id, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toBe(jsonContentType);
            expect(JSON.parse(body).ok).toEqual(1); //Unexpectedly, body is a string, so has to be parsed
            done();
        });
    });
});

