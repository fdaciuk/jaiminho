'use strict';

let debug = require('debug')('jaiminho:test');
import request from 'supertest';
import { expect } from 'chai';
import app from '../../app';

describe('Test Jaiminho API', () => {
  it('GET /cep returns `{"message":"Jaiminho CEP API"}`', done => {
    request(app)
      .get('/cep')
      .end((error, response) => {
        let result = response.text;
        debug(error, result);
        expect(result).to.be.equal('{"message":"Jaiminho CEP API"}');
        done();
      });
  });
});
