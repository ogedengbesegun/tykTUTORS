var http = require('http');
http = createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('Hello Ogedengbe Segun of Oka Akoko Land');

}).listen(3030);