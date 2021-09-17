function example1() {
  function myFunction() {
    myFunction.totalExecutedTimes++;
  }
  
  myFunction.totalExecutedTimes = 0;
  
  myFunction();
  myFunction();
  myFunction();
  myFunction();
  
  console.log(myFunction.totalExecutedTimes);
}

function example2() {
  function myFunction() {
    this.totalExecutedTimes++;
  }

  const myContext = {
    totalExecutedTimes: 0
  }

  // DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  const myFunction2 = myFunction.bind(myContext);

  myFunction2();
  myFunction2();
  myFunction2();
  myFunction2();

  console.log(myContext.totalExecutedTimes);
}

// example1();
// example2();
