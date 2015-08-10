'use strict';
var debug = require('debug')('jaiminho:cepModelMongo');
var mongoose = require('mongoose');

var cepSchema = new mongoose.Schema({
  cep: { type: String, index: true, unique: true },
  tipoDeLogradouro: String,
  logradouro: String,
  bairro: String,
  cidade: String,
  estado: String
});

module.exports = mongoose.model('Cep', cepSchema);
