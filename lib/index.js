import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Gustavo\n');
}).listen(1337, '192.168.0.31');

console.log('Server running at http://192.168.0.31:1337');
