// In JS, constructors are just functions that happen to be called with the **new** operator in front of them.

/**
1. A brand new object is created (aka constructed) out of thin air.
2. The newly constructed object is [[Prototype]]-linked.
3. The newly constructed object is set as the **this** binding for that function call.
4. Unless the function returns its own alternate objet, the new-invoked function call will automatically return the newly constructed object.
 */

function exampleWithNew() {
  function Foo(a) {
    this.a = a;
    console.log("hello");
  }

  const x = new Foo(3); // 'hello' // 1. 2. 3. 4.
  console.log(x.a); // 3
}

function exampleWithoutNew() {
  function factory(a) {
    function constructor(a) {
      this.a = a;
      return this; // 4. return the object
    }

    const prototype = {
      getA: function () {
        return this.a;
      },
    };
    // alternate: 1. and 2.
    // const context = {}; // 1. A brand new object is created // 2. The newly constructed object is [[Prototype]]-linked to Object
    // Object.setPrototypeOf(context, prototype); // 2. but now we link it to our new prototype

    const context = Object.create(prototype); // 1. and 2.
    // context.prototype.constructor = constructor ???
    const Foo = constructor.bind(context); // 3. The newly constructed object is set as the **this** binding for that function call
    return Foo(a); // 4. return the object
  }

  function factory2(a) {
    const prototype = {
      getA: function () {
        return this.a;
      },
    };
    const object = Object.create(prototype); // 1. 2. 3.
    object.a = a; // the equivalent of the constructor function
    // object.prototype.constructor must be Object now
    return a; // 4.
  }

  function factoryUsingNew(a) {
      function Foo(a) {
        this.a = a;
        // return this; // 4. implicit return the object
      }
      foo.prototype.getA = function () {
        return this.a;
      };
      return new Foo(a);

  }

  const myObj = factory(2);
  const myObj2 = factory(42);
  console.log(myObj2.a); // 42
  console.log(myObj2.getA()); // 42
  console.log(myObj.a); // 2
  console.log(myObj.getA()); // 2
}

exampleWithoutNew();
