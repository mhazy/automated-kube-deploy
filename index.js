const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.end('Raw beans');
});


console.log('Listening on:', PORT);
server.listen(PORT);

