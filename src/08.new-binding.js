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
    console.log('hello');
  }

  const x = new Foo(3); // 'hello' // 1. 2. 3. 4.
  console.log(x.a); // 3
}

function exampleWithoutNew() {
  function factory(a) {
    function foo(a) {
      this.a = a;
      return this; // 4. return the object
    }

    const context = {}; // 1. A brand new object is created // 2. The newly constructed object is [[Prototype]]-linked to Object
    Object.setPrototypeOf(context, {getA: function() { return this.a }}); // 2. but now we link it to our new prototype
    const Foo = foo.bind(context); // 3. The newly constructed object is set as the **this** binding for that function call (bar)
    return Foo(a); // 4. return the object
  }
  
  const myObj = factory(2);
  const myObj2 = factory(42);
  console.log(myObj2.a); // 42
  console.log(myObj2.getA()); // 42
  console.log(myObj.a) // 2
  console.log(myObj.getA()); // 2
}

exampleWithoutNew();
