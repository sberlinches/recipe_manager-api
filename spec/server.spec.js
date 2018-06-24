const request = require('request');
const server = require('../bin/www');

it('returns a JSON payload', (done) => {
    request.get('http://localhost:8080/api/', function (error, response, body) {
        /*console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.*/
        expect(response.statusCode).toEqual(200);
        expect(body).toContain("Greetings!");
        done();
    });
});
