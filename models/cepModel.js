'use strict';

export default function cepModel(db) {
  let $public = {};
  let $private = {};

  $public.findOne = (cep, callback) => {
    db.get(cep, callback);
  };

  $public.put = (data, callback) => {
    db.put(data.cep, data, callback);
  };

  $public.remove = (cep, callback) => {
    db.del(cep, callback);
  };

  return $public;
}
