const http = require('http');

//server object
http.createServer((req, res) => {

    res.write('text in browser');
    res.write('enter password');
    res.end()
}).listen(50069, () => console.log('server running'));