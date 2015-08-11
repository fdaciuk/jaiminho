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

  $public.create = function create(request, response, message) {
    var cep = request.body.cep;
    message = message || ' successfully inserted!';
    cepModel.put(request.body, function(error, data) {
      if(error)
        response.status(500).json({ error: 'Internal Server Error' });
      response.json({ message: cep + message });
    });
  };

  $public.update = function update(request, response) {
    var message = ' successfully updated!';
    $public.create(request, response, message);
  };

  $public.remove = function remove(request, response) {
    var cep = request.params.cep;
    cepModel.remove(cep, function(error) {
      if(error)
        response.status(500).json({ error: 'Internal Server Error' });
      response.json({ message: cep + ' succesfully removed!' });
    });
  };

  return $public;
}
