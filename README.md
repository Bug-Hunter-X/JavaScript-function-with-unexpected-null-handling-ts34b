# JavaScript Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling in a simple addition function.

The `bug.js` file contains a function that adds two numbers but returns null if either input is explicitly null.  The challenge is that it does not handle other falsy values (e.g., undefined, 0, false).

The `bugSolution.js` file provides a refined version that addresses these edge cases, offering more robust null handling.

## How to run

1. Clone this repository.
2. Open the `bug.js` and `bugSolution.js` files in a text editor.
3. Run the JavaScript code in a browser console or a Node.js environment.

## Issues and Improvements

The original function lacks comprehensive checks for undefined, NaN, and other falsy values that could result in unexpected behavior. The solution demonstrates how to implement such checks for better error handling and reliability.