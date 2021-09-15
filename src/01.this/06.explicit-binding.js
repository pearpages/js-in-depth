// apply array
// call arguments

function example1() {
  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 2
  };

  foo.call(obj); // 2
  foo.apply(obj); // 2
  foo(); // undefined
}

example1();
