module.exports = function() {
  var levelup = require( 'levelup' );
  var db = levelup( './db/cep' );
  return db;
};
