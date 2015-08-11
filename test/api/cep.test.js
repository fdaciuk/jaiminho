'use strict';
require('should');
var app = require('../../app');
var request = require('supertest');
var debug = require('debug')('jaiminho:test');

describe('Test Jaiminho API', function() {
  it('GET /cep returns `{"message":"Jaiminho CEP API"}`', function(done) {
    request(app)
      .get('/cep')
      .end(function(error, response) {
        var result = response.text;
        debug(error, result);
        result.should.be.equal('{"message":"Jaiminho CEP API"}');
        done();
      });
  });
});
