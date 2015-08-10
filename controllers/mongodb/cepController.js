'use strict';
var debug = require('debug')('jaiminho:cepControllerMongo');

module.exports = function(cepModel) {
  return cepController(cepModel);
};

function cepController(cepModel) {
  var $public = {};
  var $private = {};

  $public.retrieveOne = function retrieveOne(request, response) {
    var cep = request.params.cep;
    console.log('RETRIEVE ONE', cepModel);
    cepModel.findOne({ cep: cep }, function(error, data) {
      if(error)
        response.status(404).json({ error: 'CEP ' + cep + ' not found' });
      response.json(data);
    });
  };

  $public.create = function create(request, response, message) {
    var cep = request.body.cep;
    var newCep = new cepModel(request.body);
    console.log('CEP CREATED!', cepModel);
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
