// ======================================================
// VARIABLES & DATA TYPES (1–5)
// Write Answers, Errors, How, Why for Every Questions
// ======================================================

// Given Variables (Do NOT change values unless asked)

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;


// ======================================================
// 1. Compare `a == "a"` and `a === "a"`
// ======================================================

console.log("Q1:");
console.log(a == "a");   // true
console.log(a === "a");  // true

// HOW:
// ==  -> checks value only (loose equality)
// === -> checks value + datatype (strict equality)

// WHY:
// a is already a string "a"
// Both value and datatype are same
// So both return true

// ERROR:
// No error


// ======================================================
// 2. Compare `b == c` and `b === c`
// ======================================================

console.log("\nQ2:");
console.log(b == c);   // true
console.log(b === c);  // false

// HOW:
// b = "10" (string)
// c = 10   (number)

// == converts string to number automatically
// So "10" becomes 10 → 10 == 10 → true

// === does NOT convert datatype
// string !== number → false

// WHY:
// == allows type coercion
// === does strict comparison (recommended in real projects)

// ERROR:
// No error


// ======================================================
// 3. Convert `b` so that `b === c` becomes true
// ======================================================

let newB = Number(b);   // convert string to number

console.log("\nQ3:");
console.log(newB === c);  // true

// HOW:
// Number("10") → 10

// WHY:
// Now both are number datatype
// 10 === 10 → true

// Alternative methods:
// parseInt(b)
// +b

// ERROR:
// If b = "abc", Number("abc") → NaN


// ======================================================
// 4. Check whether `d` is undefined WITHOUT using typeof
// ======================================================

console.log("\nQ4:");
console.log(d === undefined);  // true

// HOW:
// d is declared but not assigned value
// Default value → undefined

// WHY:
// When variable is declared but not initialized,
// JavaScript automatically assigns undefined

// ERROR:
// If variable is NOT declared at all:
// console.log(x === undefined);
// ❌ ReferenceError: x is not defined


// ======================================================
// 5. Write a condition that safely checks both `d` and `e`
// ======================================================

console.log("\nQ5:");

if (d == null && e == null) {
  console.log("Both are null or undefined");
}

// HOW:
// null == undefined → true
// So using == null checks both null and undefined

// WHY:
// d is undefined
// e is null
// Using == null safely checks both cases

// Recommended safe check:

if (d === undefined && e === null) {
  console.log("d is undefined AND e is null");
}

// ERROR:
// Using === null will NOT detect undefined
// Using === undefined will NOT detect null


// ======================================================
// END OF FILE
// ======================================================
