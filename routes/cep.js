'use strict';
var express = require('express');
var router = express.Router();
var db = require('../db/leveldb');
var cepModel = require('../models/cepModel')(db);
var cepController = require('../controllers/cepController')(cepModel);

router.get('/', function(request, response) {
  response.json({ message: 'Jaiminho CEP API' });
});

router.post('/', cepController.create);
router.get('/:cep', cepController.retrieveOne);
router.put('/:cep', cepController.update);
router.delete('/:cep', cepController.remove);

module.exports = router;
