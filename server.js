var express = require('express');
var server = express();

server.use(express.logger());
server.use(express.static('ontheroad.com'));
server.listen(3000);