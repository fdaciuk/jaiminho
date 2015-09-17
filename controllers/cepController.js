'use strict';

let debug = require('debug')('jaiminho:cepController');

export default function cepController(cepModel) {
  let $public = {};
  let $private = {};

  $public.retrieveOne = (request, response) => {
    let cep = request.params.cep;
    cepModel.findOne(cep, (error, data) => {
      if(error)
        response.status(404).json({ error: `CEP ${cep} not found` });
      response.json(data);
    });
  };

  $public.create = (request, response) => {
    let cep = request.body.cep;
    cepModel.put(request.body, (error, data) => {
      if(error)
        return $private.error500(error, response);
      response.json({ message: `${cep} successfully inserted!` });
    });
  };

  $public.update = $public.create;

  $public.remove = (request, response) => {
    let cep = request.params.cep;
    cepModel.remove(cep, (error) => {
      if(error)
        return $private.error500(error, response);
      response.json({ message: `${cep} succesfully removed!` });
    });
  };

  $private.error500 = (error, response) => {
    debug(error);
    response.status(500).json({ error: 'Internal Server Error' });
  };

  return $public;
}
