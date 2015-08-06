'use strict';
var debug = require('debug')('jaiminho:cepController');

module.exports = function(cepModel) {
  function cepController() {
    var $public = {};
    var $private = {};

    $public.get = function get(request, response, next) {
      var cep = request.params.cep;
      cepModel.findOne(cep, function(error, data) {
        if(error)
          response.status( 404 ).json({ error: 'CEP ' + cep + ' not found' });
        response.json( data );
      });
    };

    $public.create = function create(request, response) {
      var cep = request.body.cep;
      cepModel.create(request.body, function(error, data) {
        if(error)
          response.status(500).json({ error: 'Internal Server Error' });
        response.json({ message: cep + ' succesfully inserted!' });
      });
    };

    $public.update = function update(request, response) {
    };

    $public.delete = function del(request, response) {
    };

    return $public;
  }

  return cepController();
};
