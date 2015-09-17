'use strict';
export default function(app) {
  app.use('/cep', require('./cep'));
};
