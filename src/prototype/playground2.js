function Foo(name) {
  this.name = name;
  return this;
}

const prototype = {
  myName: function () {
    return this.name;
  },
};

const foo = Foo.bind(Object.create(prototype))("Pere");
console.log(foo.myName());
console.log(Object.getPrototypeOf(foo) === prototype);

for (let key in foo) {
  console.log(key);
}
