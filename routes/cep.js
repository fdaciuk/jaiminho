'use strict';

import express from 'express';
import $ from 'cheerio';
import request from 'superagent';
import db from '../db/leveldb';
let debug = require('debug')('jaiminho:cepRouter');
let cepModel = require('../models/cepModel')(db);
let cepController = require('../controllers/cepController')(cepModel);
let router = express.Router();

router.get('/', (request, response) => {
  response.json({ message: 'Jaiminho CEP API' });
});

router.post('/', cepController.create);
// router.get('/:cep', cepController.retrieveOne);

router.get('/:cep', (req, res) => {
  console.log('CEP:', req.params.cep);
  let cepURL = 'http://m.correios.com.br/movel/buscaCepConfirma.do';
  request
    .post(cepURL)
    .send({
      cepEntrada: req.params.cep,
      tipoCep: '',
      cepTemp: '',
      metodo: 'buscarCep'
    })
    .end((err, data) => {
      console.log(Object.keys(data));
      console.log(Object.keys(data.res));
      console.log(data.res.complete);
    })
  ;
});

router.put('/:cep', cepController.update);
router.delete('/:cep', cepController.remove);

export default router;
