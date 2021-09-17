// In JS, constructors are just functions that happen to be called with the **new** operator in front of them.

/**
1. A brand new object is created (aka constructed) out of thin air.
2. The newly constructed object is [[Prototype]]-linked.
3. The newly constructed object is set as the **this** binding for that function call (construction call).
4. Unless the function returns its own alternate objet, the new-invoked function call will automatically return the newly constructed object.
 */

function exampleWithNew() {
  function factory(a) {
    function Foo(a) {
      this.a = a;
      // return this; // 4. implicit return the object
    }
    Foo.prototype.getA = function () {
      return this.a;
    };
    return new Foo(a);
  }

  const obj = factory(4);
  console.log(obj.getA()); // 4
}

function factoryWithoutNewButWithConstructor() {
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

    const context = Object.create(prototype); // 1. and 2.
    const bindConstructor = constructor.bind(context); // 3. The newly constructed object is set as the **this** binding for that function call
    return bindConstructor(a); // 4. return the object
  }

  const obj = factory(4);
  console.log(obj.getA()); // 4
}

function factoryWithoutNewButWithConstructor2() {
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

    const context = {}; // 1. A brand new object is created // 2. The newly constructed object is [[Prototype]]-linked to Object
    Object.setPrototypeOf(context, prototype); // 2. but now we link it to our new prototype
    const bindConstructor = constructor.bind(context); // 3. The newly constructed object is set as the **this** binding for that function call
    return bindConstructor(a); // 4. return the object
  }

  const obj = factory(3);
  console.log(obj.getA()); // 3
}

function factoryWithoutNewAndWithoutConstructor() {
  function factory(a) {
    const prototype = {
      getA: function () {
        return this.a;
      },
    };
    const object = Object.create(prototype); // 1. 2. 3.
    object.a = a; // the equivalent of the constructor function
    // object.prototype.constructor must be Object now
    return object; // 4.
  }

  const obj = factory(42);
  console.log(obj.getA()); // 42
}

function factoryUsingOLOO() {
  function factory(firstName, lastName) {
    const objTemplate = {
      init: function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
      },
      getFirstName() {
        return this.firstName;
      },
    };

    // we Delegate to the objTemplate
    const obj = Object.create(objTemplate).init(firstName, lastName);
    // we add behavior tih getLastName and getFullName
    obj.getLastName = function () {
      return this.lastName;
    };
    obj.getFullName = function () {
      return this.getFirstName() + ' ' +  this.getLastName();
    }
    return obj;
  }

  const obj = factory("Pere", "Pages");
  console.log(obj.getFullName()); // 'Pere Pages'
}

// exampleWithNew();
// factoryWithoutNewButWithConstructor();
// factoryWithoutNewButWithConstructor2();
// factoryWithoutNewAndWithoutConstructor();
// factoryUsingOLOO();
