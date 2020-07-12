const express = require('express');
const path = require('path');

const cvApp = express();

// cvApp.use(express.static(__filename));
cvApp.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = 3002;
cvApp.listen(port);

console.log('server on port: ' + port);
