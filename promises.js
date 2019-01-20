const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// readFile("node\\files\\demofile.txt", "utf-8")
//   .then(
//     (data) => gzip(data),
//     (err) => console.log(err)
//   )
//   .then((gzipped) => console.log(gzipped))
//   .catch((err) => {
//     console.log(err);
//   });

// readFile("node\\files\\demofile.txt", "utf-8")
//   .then((data) => {
//     return gzip(data);
//   })
//   .then((gzipped) => console.log(gzipped))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("done..."));

// let car1 = new Promise(resolve => setTimeout(resolve, 2000, "Car 1."));
// let car2 = new Promise(resolve => setTimeout(resolve, 1000, "Car 2."));
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3."));
//
// Promise.race([car1, car2, car3]).then(value => {
//   console.log("Promise Resolved", value);
// });

function timeout(sleep) {
  return new Promise((_, reject) => setTimeout(reject, sleep, "timeout"));
}

function readFileFake(sleep) {
  return new Promise(resolve => setTimeout(resolve, sleep, "File data"));
}

Promise.race([
  readFileFake(5000),
  timeout(1000)
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


