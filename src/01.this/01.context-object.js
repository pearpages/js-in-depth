const { runAndLog } = require('./utils');

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


runAndLog(() => makeGreeting.call(me));
runAndLog(() => makeGreeting.call(you));