const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
 res.write("Hello Node");
setTimeout(() => {
  res.write("still on. ....");
}, 3000)
 res.end();
});


server.listen(8080);
// event emitters
//streams
//clusters
