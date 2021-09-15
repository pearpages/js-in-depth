function runAndLog() {
  // Array.prototype.slice.call(arguments);
  // [...arguments]
  const args = Array.from(arguments);
  const fn = args.shift();
  console.log(fn(...args));
}

// e.g. run((a, b) => a + b, 1, 2);

module.exports = {
  runAndLog
};
