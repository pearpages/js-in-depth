function creatingObjectWithPrototypeChain() {
  const a = { a: 1 };
  const b = Object.create(a);
  b.b = 2;
  const c = Object.create(b);
  c.c = 3;
  return c;
}

function getObjectOwnProperties(ob) {
  return Object.keys(ob);
}

function getAllThePropertiesIncludingChained(ob) {
  const res = [];
  for (let key in ob) {
    // iterable
    res.push(key);
  }
  return res;
}

function objectAreNotIterables(ob) {
  for (let value of ob) {
    console.log(value); // throw error c is not iterable
  }
}

function hasOwnPropertyExample() {
  const c = creatingObjectWithPrototypeChain();
  console.log(c.hasOwnProperty('c')); // true
  console.log(c.hasOwnProperty('a')); // false
}
