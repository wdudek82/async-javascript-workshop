const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const asyncFileIterator = (files) => ({
  [Symbol.asyncIterator]: () => ({
    i: 0,
    next() {
      if (this.i >= files.length) {
        return Promise.resolve({
          done: true,
        });
      }

      const file = files[this.i];
      this.i += 1;

      return readFile(file, "utf8").then((data) => ({
        done: false,
        value: data,
      }));
    },
  }),
});

const paths = ["node\\files\\demofile.txt", "node\\files\\demofile.other.txt"];

(async () => {
  for await (const file of asyncFileIterator(paths)) {
    console.log(file);
  }
})();
