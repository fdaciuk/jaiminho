'use strict';
var express = require('express');
var router = express.Router();
var db = require('../db/leveldb');
var cepController = require('../controllers/cepController')(db);

router.get('/', function(request, response) {
  response.json({ message: 'Jaiminho CEP API' });
});

router.post('/', cepController.create);
router.get('/:cep', cepController.get);
router.put('/:cep', cepController.update);
router.delete('/:cep', cepController.delete);

module.exports = router;
