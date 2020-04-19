// ejs 只是一个模板渲染引擎 只是利用普通的javascript 代码生成HTML 页面
const ejs = require('ejs');
// const people = ['geddy', 'neil', 'alex'],
// html = ejs.render('<% <h2> people[0] </h2> %>', {people: people});

let html = ejs.render('<% var name="测试" %><%= name %>', {});
console.log('html', html)