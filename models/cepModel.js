'use strict';
module.exports = function(db) {
  return cepModel(db);
};

function cepModel(db) {
  var $public = {};
  var $private = {};

  $public.findOne = function findOne(cep, callback) {
    db.get(cep, callback);
  };

  $public.put = function put(data, callback) {
    db.put(data.cep, data, callback);
  };

  $public.remove = function remove(cep, callback) {
    db.del(cep, callback);
  };

  return $public;
}
