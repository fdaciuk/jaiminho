var express = require('express');
var router = express.Router();

router.get('/:cep', function(request, response, next) {
  response.json({ cep: request.params.cep });
});

module.exports = router;
