var expect = require('Chai').expect;
var request = require('request');
var fs = require('fs');

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

  it('Requires at least six characters in the secret', function(done) {
    request(
      'http://localhost:1337/join/test/secre', 
      function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }   
    );
  })

  it('Add a user.', function(done) {
    request(
      'http://localhost:1337/join/tester/secret',
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        var file = fs.readFileSync('./server/users.json', 'utf8');
        var users = JSON.parse(file);
        expect(users.tester).to.exist;
        done();
      }
    );
  });

  after(function() {
    var file = fs.readFileSync('./server/users.json', 'utf8');
    var users = JSON.parse(file);
    delete users.tester;
    fs.writeFileSync('./server/users.json', JSON.stringify(users))
  });
});
