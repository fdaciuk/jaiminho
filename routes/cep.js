var express = require('express');
var router = express.Router();
var db = require( '../modules/database' )();

router.get('/:cep', function(request, response, next) {
  var cep = request.params.cep;
  db.get( cep, function( error, data ) {
    if( error )
      response.status( 404 ).json({ error: 'CEP ' + cep + ' not found' });
    response.json( data );
  });
});

module.exports = router;
