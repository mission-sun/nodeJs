const Koa = require("koa");
const index = require("./router");

const app = new Koa();

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor(data1, data2) {
    super();
    this.data1 = data1;
    this.data2 = data2;
    // console.log("this", this);
    this.bindEvent();
  }
  bindEvent() {
    this.on("enqueue", () => {
      // console.log("监听事件..........");
    });
  }
  generate() {
    // console.log("开始出发", this);
    this.emit("enqueue", { event: "enqueue" });
  }
}

const myEmitter = new MyEmitter();
// console.log("myEmitter", myEmitter.generate());

// var listener2 = function listener2() {
//   console.log("监听器 listener2 执行。");
// };

// myEmitter.on("connection", listener2);
// myEmitter.addListener('connection', listener1);

// myEmitter.emit("connection");
app.use(index.routes());

app.listen(4000);
