function implicitBinding() {
  function foo() {
    console.log(this.a);
  }

  const obj = { // context object. you could say the object "owns" or "contains" the function reference
    a: 2,
    foo
  }

  obj.foo(); // 2
}

function implicitBinding2() {
  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 42, // Only the top/last level of an object property reference chain matters to the `call-site`
    foo
  }

  const obj2 = {
    a: 2,
    obj
  }

  obj.foo(); // 42
}

function exampleOfWrongImplicitBinding() {
  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 2,
    foo
  }

  a = "oops global"; // window.a or global.a

  foo(); // "oops global"

  const bar = obj.foo;
  bar(); // "oops global"
}

function exampleOfWrongImplicitBinding2() {
  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 2,
    foo
  }
  
  global.a = "oops global";

  setTimeout(obj.foo, 0); // undefined
}
