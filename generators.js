function* range() {
  for (let i = 0; i < 4; i += 1) {
    yield i;
  }
  yield "moo";
}

for (const i of range()) {
  console.log(i);
}
