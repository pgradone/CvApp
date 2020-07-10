// ref: https://www.udemy.com/course/learn-javascript-full-stack-from-scratch/learn/lecture/13926318#overview
// part 18 - section 3
const fs = require('fs');
const http = require('http');
const cvApp = http.createServer(function (request, response) {
  if (request.url == '/') {
    response.end('Application is served');
  }
  if (request.url == '/about') {
    response.end('Thanks for your interest');
  }

  response.end('Sorry, page cannot be served!');
});

cvApp.listen(3001);
