'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cep');

module.exports = mongoose;
