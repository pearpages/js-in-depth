/**
 * Explicit binding is when we use 'apply' (array) and 'call' (arguments)
 */

function explicitBinding() {
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

explicitBinding();
