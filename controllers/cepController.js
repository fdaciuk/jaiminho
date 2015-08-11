'use strict';
var debug = require('debug')('jaiminho:cepControllerLevel');

module.exports = function(cepModel) {
  return cepController(cepModel);
};

function cepController(cepModel) {
  var $public = {};
  var $private = {};

  $public.retrieveOne = function retrieveOne(request, response) {
    var cep = request.params.cep;
    cepModel.findOne(cep, function(error, data) {
      if(error)
        response.status(404).json({ error: 'CEP ' + cep + ' not found' });
      response.json(data);
    });
  };

  $public.create = function create(request, response) {
    var cep = request.body.cep;
    cepModel.put(request.body, function(error, data) {
      if(error)
        return $private.error500(error, response);
      response.json({ message: cep + ' successfully inserted!' });
    });
  };

  $public.update = function update(request, response) {
    $public.create(request, response, message);
  };

  $public.remove = function remove(request, response) {
    var cep = request.params.cep;
    cepModel.remove(cep, function(error) {
      if(error)
        return $private.error500(error, response);
      response.json({ message: cep + ' succesfully removed!' });
    });
  };

  $private.error500 = function error500(error, response) {
    debug(error);
    response.status(500).json({ error: 'Internal Server Error' });
  };

  return $public;
}
