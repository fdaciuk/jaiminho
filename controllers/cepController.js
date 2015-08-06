'use strict';
var db = require( '../db/leveldb' );

exports.getCep = function getCep(request, response, next) {
  var cep = request.params.cep;
  db.get( cep, function( error, data ) {
    if( error )
      response.status( 404 ).json({ error: 'CEP ' + cep + ' not found' });
    response.json( data );
  });
};
