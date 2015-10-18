var expect = require('Chai').expect;
var request = require('request');

describe('Join the site.', function() {
  it('Requires a name and secret.', function(done) {
    request(
      'http://localhost:1337/join/name/', 
      function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }   
    );  
  });

  it('Requires at least three letters in name', function(done) {
    request(
      'http://localhost:1337/join/na/secret',      
      function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      } 
    );
  });

  it('Lets new users join.', function(done) { 
    request(
      'http://localhost:1337/join/test/secret', 
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      } 
    );
  });
});
