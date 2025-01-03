function foo(a, b) {
  //Solution 1: Returning 0 for null values
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b; 
  return a + b;
}

//or

function foo(a, b) {
  //Solution 2:Throwing an error if null values are encountered.
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

console.log(foo(null, 1)); // 1 or throws an error
console.log(foo(1, null)); // 1 or throws an error
console.log(foo(1, 2)); // 3