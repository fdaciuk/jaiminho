'use strict';
module.exports = function(app) {
  app.use('/cep', require('./cep'));
};
