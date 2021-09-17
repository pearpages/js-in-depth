/**
 * The default binding goes to global or window
 * with 'use strict' throws an Error
 */

function callStackExample() {
  function baz() {
    console.log('baz');
    bar();
  }
  
  function bar() {
    console.log('bar');
    foo();
  }
  
  function foo() {
    console.log('foo');
  }
  
  baz(); // baz bar foo
  
}

function defaultBinding() {
  function foo() {
    console.log(this.a);
  }

  a = 2; // global.a or window.a

  foo(); // 2
  delete a;
}

function defaultBindingWithStrictMode() {
  // "use strict"
  function foo() {
    console.log(this.a);
  }

  a = 2; // error with 'use strict'

  foo();
  delete a; // error with 'use strict'
}

// callStackExample();
// defaultBinding();
// defaultBindingWithStrictMode();
