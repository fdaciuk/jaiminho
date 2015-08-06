'use strict';
var levelup = require('levelup');
var db = levelup( './db/cep', { valueEncoding: 'json' });

module.exports = db;
