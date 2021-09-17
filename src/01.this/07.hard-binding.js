/**
 * When we use a function that wraps an explicit binding so we cannot override it anymore.
 */

function hardBinding() {
  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 2
  };

  const bar = function() {foo.call(obj) };

  bar(); // 2

  setTimeout(bar, 0); // 2

  bar.call({a: 4}); // 2
}

function hardBinding2() {
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }

  const obj = {
    a: 2
  }

  const bar = function() {
    return foo.apply(obj, arguments);
  }

  const b = bar(3);  // 2 3
  console.log(b); // 5
}

function bindHelperExample() {
  function bind(fn, obj) {
    return function () {
      return fn.apply(obj, arguments);
    }
  }

  function foo() {
    console.log(this.a);
  }

  const obj = {
    a: 2
  };

  const bar = bind(foo, obj);
  bar(); // 2
}

function functionPrototypeBindExample() {
  function foo(something) {
    return this.a + something;
  }

  const obj = {
    a: 2
  };

  const bar = foo.bind(obj);
  console.log(bar(3)); // 5
}

function callContextForEachExample() {
  function foo(el) {
    console.log(el, this.id);
  }

  const obj = {
    id: 'awesome'
  };

  [1, 2, 3].forEach(foo, obj); // 1 awesome 2 awesome 3 awesome
  [1, 2, 3].forEach(foo.bind(obj)); // 1 awesome 2 awesome 3 awesome
}

// hardBinding();
// hardBinding2();
// bindHelperExample();
// functionPrototypeBindExample();
// callContextForEachExample();
