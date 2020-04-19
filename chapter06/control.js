const path = require("path");
const fs = require("fs");
let ejs = require("ejs");
const globby = require("globby");

// 创建文件夹

console.log('path', path.join('aaa', 'bbb/cc'))


const rootPath = path.resolve(__dirname, "rootPathDir");
const renderTemplate = path.resolve(__dirname, "render.js");
const pkg = require(path.resolve(__dirname, "package.json"));

const _files = globby(["**/*"], {
  cwd: rootPath,
});
(async () => {
  const paths = await globby(["**/*"], { cwd: rootPath });

  // console.log(paths);
})();

const fileContent = fs.readFileSync(
  path.resolve(__dirname, "package.json"),
  "utf8"
);

const rederData = fs.readFileSync(renderTemplate, "utf8");

const user = { name: "alex12121" };
// const templateHtml =

const html = ejs.render(rederData, {
  user: user,
});
// console.log("html", html);

fs.readdir(rootPath, (err, files) => {
  if (err) {
  } else {
    for (item of files) {
      // console.log("item", item);
      // const filePath = path.resolve(rootPath, item);
      // const template = fs.readFileSync(filePath, "utf-8");
      // console.log("template", template);
      // fs.readFile(filePath, { encoding: "utf8" }, (_file, error) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("_file", _file);
      //   }
      // });
    }
  }
});
console.log("rootPath", rootPath);
const file = (cxt, next) => {
  // cxt.response.type = "html";
  cxt.response.body = _files;
};

module.exports = file;
