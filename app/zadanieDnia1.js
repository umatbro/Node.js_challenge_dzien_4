const http = require('http');

const srv = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('Hello world');
});

srv.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});