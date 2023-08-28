const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => {
    return total + item;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => {
    return total * item;
  }, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  total = 1;
	if(num === 0){
    return 1;
  }
  for(let i = num; i > 0; i--){
    total = total * i;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
