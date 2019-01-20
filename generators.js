// function* range() {
//   for (let i = 0; i < 4; i += 1) {
//     yield i;
//   }
//   yield "moo";
// }
//
// for (const i of range()) {
//   console.log(i);
// }
//
// function* sayWhat() {
//   console.log(yield, "World!");
// }
//
// const it = sayWhat();
// it.next();
// it.next("Hello");

const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

const files = [
  "node\\files\\demofile.txt",
  "node\\files\\demofile.other.txt",
];

function* readFileGenerator(paths) {
  const promises = files.map((name) => readFile(name, "utf8"));
  for (const promise of promises) {
    yield promise;
  }
}

(async () => {
  for await (const file of readFileGenerator(files)) {
    console.log(file);
  }
})();
