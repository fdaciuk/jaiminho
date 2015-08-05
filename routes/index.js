module.exports = function(app) {
  var cep = require('./cep');
  app.use('/cep', cep);
}
