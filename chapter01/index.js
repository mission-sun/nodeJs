const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const hostname = "127.0.0.1";

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

var listener1 = function listener1() {
  console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
 console.log('监听器 listener2 执行。');
}

// myEmitter.on('connection', listener2);
myEmitter.addListener('connection', listener1);


myEmitter.emit('connection');



// myEmitter.on('event', () => {
//   console.log('触发事件1');
// });
// console.log("222")
setTimeout( () => {}) 
myEmitter.emit('event');

const port = 8888;
const server = http.createServer((req, res) => {
  // parse 的对象转换有pathname
  let pathname = url.parse(req.url).pathname;
  // 获取扩展名
  let extname = path.extname(pathname);
  if (pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const htmlUlr = path.join(__dirname, pathname, "index.html");
    const readHtml = fs.readFileSync(htmlUlr);
    // 返回二进制流
    // <Buffer 3c 68 74 6d 6c 3e 0a 0a 3c 68 65 61 64 3e 0a 20 20 20 20 3c 73 74 79 6c 65 3e 0a 20 20 20 20 20 20 20 20 62 6f 64 79 20 7b 0a 20 20 20 20 20 20 20 20 ... >
    res.end(readHtml);
  } else if (extname == ".jpg" || extname == ".png") {
    res.writeHead(200, { "Content-Type": "image/" + extname.substr(1) });
    res.end(fs.readFileSync(path.join(__dirname, pathname)));
  } else {
    // res.statusCode = 404;
    const data = JSON.stringify({'code':200, data:{'name':'smx'}})

    res.writeHead(200, {"Content-Type":'text/plain'})
    res.end(data);
  }
});
server.listen(port, hostname, () => {
  process.title='程序员成长指北测试进程';
  console.log('进程id',process.pid)
  console.log(`Server running at http://${hostname}:${port}/`);
});
