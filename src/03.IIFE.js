const externalValue = 3;
const value = 1;

(function(value) {
  console.log(value + ' ' + externalValue);
})(2); // 2 3
