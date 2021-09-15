function example() {
  function foo() {
    console.log(this.a);
  }

  a = 2; // global
  o = {a: 3, foo}; // global
  p = {a: 4}; // global

  o.foo(); // 3
  (p.foo = o.foo)(); // 2
  p.foo(); // 4
}

example();
