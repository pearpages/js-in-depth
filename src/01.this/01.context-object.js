const { runAndLog } = require('./utils');

function exampleOfUsingContextObject() {
  function nameToUppercase() {
    return this.name.toUpperCase();
  }
  
  function makeGreeting() {
    return `Hello, I'm ${nameToUppercase.call(this)}`;
  }
  
  const me = {
    name: 'Pere'
  };
  
  const you = {
    name: 'Reader'
  }
  
  
  runAndLog(() => makeGreeting.call(me));  // Hello, I'm PERE
  runAndLog(() => makeGreeting.call(you)); // Hello, I'm READER
}

exampleOfUsingContextObject();
