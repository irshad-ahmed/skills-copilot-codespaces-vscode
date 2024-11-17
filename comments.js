// create a web server
// create a route for /comments
// serve a string "This is a comments page"
// listen on port 3000
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.write('This is a comments page');
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000');