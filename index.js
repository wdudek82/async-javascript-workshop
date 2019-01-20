
function c() {
  console.log("c:", myVar);
}

function b() {
  var myVar;
  console.log("b:", myVar);

  c();
}

function a() {
  var myVar = 2;
  b();
  console.log("a:", myVar);

  function d() {
    console.log("d:", ++myVar);
    console.log("d:", this);
  }

  d();
  console.log("a:", myVar);
}

console.log(myVar);
var myVar = 1;
a();
console.log(myVar);

