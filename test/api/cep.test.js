'use strict';

let debug = require('debug')('jaiminho:test');
import app from '../../app';
import request from 'supertest';
import 'should';

describe('Test Jaiminho API', () => {
  it('GET /cep returns `{"message":"Jaiminho CEP API"}`', done => {
    request(app)
      .get('/cep')
      .end((error, response) => {
        let result = response.text;
        debug(error, result);
        result.should.be.equal('{"message":"Jaiminho CEP API"}');
        done();
      });
  });
});
