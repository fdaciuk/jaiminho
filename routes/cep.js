'use strict';

import express from 'express';
import db from '../db/leveldb';
let debug = require('debug')('jaiminho:cepRouter');
let cepModel = require('../models/cepModel')(db);
let cepController = require('../controllers/cepController')(cepModel);
let router = express.Router();

router.get('/', (request, response) => {
  response.json({ message: 'Jaiminho CEP API' });
});

router.post('/', cepController.create);
router.get('/:cep', cepController.retrieveOne);
router.put('/:cep', cepController.update);
router.delete('/:cep', cepController.remove);

export default router;
