var express = require('express');
var router = express.Router();
var db = require( '../modules/database' )();

router.get('/:cep', function(request, response, next) {
  db.get( request.params.cep, function( error, data ) {
    if( error )
      response.status( 404 ).json({ error: 404 });
    response.json( data );
  });
});

module.exports = router;
