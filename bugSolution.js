function foo(a, b) {
  // Check if a and b are numbers before performing the addition operation
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return null;
  }
  // Use a strict equality check to only handle null values
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null));// null
console.log(foo(undefined,2)); // null
console.log(foo(1,undefined)); // null
console.log(foo(NaN,2)); // null