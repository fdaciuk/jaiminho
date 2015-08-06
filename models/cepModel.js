'use strict';
module.exports = function(db) {
  return cepModel(db);
};

function cepModel(db) {
  var $public = {};
  var $private = {};

  $public.findOne = function findOne(cep, callback) {
    return db.get(cep, callback);
  };

  $public.create = function create(data, callback) {
    return db.put(data.cep, data, callback);
  };

  return $public;
}
