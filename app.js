var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000';

var app = express();
app.set('port', port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require( './routes' )(app);
require( './modules/middlewares' )(app);


http.createServer(app).listen(port, function() {
  console.log( 'Jaiminho delivering little letters at http://localhost:3000' );
});
