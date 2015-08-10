'use strict';
var express = require('express');
var router = express.Router();
var dbType = process.env.DB || 'leveldb';
var db = require('../db/' + dbType);
var cepModel = require('../models/' + dbType + '/cepModel')(db);
var cepController = require(
  '../controllers/' + dbType + '/cepController'
)(cepModel);

router.get('/', function(request, response) {
  response.json({ message: 'Jaiminho CEP API' });
});

router.post('/', cepController.create);
router.get('/:cep', cepController.retrieveOne);
router.put('/:cep', cepController.update);
router.delete('/:cep', cepController.remove);

module.exports = router;
