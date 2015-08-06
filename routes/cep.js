'use strict';
var express = require('express');
var router = express.Router();
var cepController = require('../controllers/cepController');

router.get('/:cep', cepController.getCep);

module.exports = router;
