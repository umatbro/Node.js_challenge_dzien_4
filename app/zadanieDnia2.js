const http = require('http');

const srv = http.createServer((req, res) => {
    let userAgent = req.headers['user-agent'];
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`Informacja o twojej przeglądarce: ${userAgent}`)
});

srv.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});