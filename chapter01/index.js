const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log('pathname', req.url)
    console.log('__dirname', __dirname)
    // 获取扩展名
    let extname = path.extname(pathname);
    if (pathname == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const htmlUlr = path.join(__dirname, pathname, 'index.html')
        const readHtml = fs.readFileSync(htmlUlr)
        // 返回二进制流
        // <Buffer 3c 68 74 6d 6c 3e 0a 0a 3c 68 65 61 64 3e 0a 20 20 20 20 3c 73 74 79 6c 65 3e 0a 20 20 20 20 20 20 20 20 62 6f 64 79 20 7b 0a 20 20 20 20 20 20 20 20 ... >
        res.end(readHtml);
    }
    else if (extname == '.jpg' || extname == '.png') {
        // console.log('Content-Type', 'image/' + extname.substr(1))
        // image/png  image/jpg
        res.writeHead(200, { 'Content-Type': 'image/' + extname.substr(1) });
        res.end(fs.readFileSync(path.join(__dirname, pathname)));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});