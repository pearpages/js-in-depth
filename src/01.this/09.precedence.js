/**
 * 1. "new binding" this is the new created object
 * 2. "explicit binding (call/apply)" this is the specified object
 * 3. "implicit binding" this is the owning or containing object
 * 4. "default binding" this is the global object if no 'use strict'
 */

function explicitBindingTakesPrecedenceOverImplicitBinding() {
  function foo() {
    console.log(this.a);
  }
  
  const obj1 = {
    a: 2,
    foo
  };
  
  const obj2 = {
    a: 3,
    foo
  };
  
  // Implicit binding
  obj1.foo(); // 2
  obj2.foo(); // 3
  
  // Explicit binding
  obj1.foo.call(obj2); // 3
  obj2.foo.call(obj1); // 2
}

function newBindingTakesPrecedenceOverImplicitBinding() {
    function foo(something) {
      this.a = something;
    }

    obj1 = { // global, window
      foo
    };

    obj2 = {}; // global, window

    obj1.foo(2);
    console.log(obj1.a); // 2
    
    obj1.foo.call(obj2, 3);
    console.log(obj2.a); // 3

    const bar = new obj1.foo(4);
    console.log(obj1.a); // 2;
    console.log(bar.a); // 4;
}

// explicitBindingTakesPrecedenceOverImplicitBinding();
// newBindingTakesPrecedenceOverImplicitBinding();

// TODO: add example with new binding being the stronger taking precedence to hard binding even
