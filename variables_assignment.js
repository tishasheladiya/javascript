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

// 6. null == undefined but strict is false
console.log("\nQ6:");
console.log(null == undefined);   // true  (loose equality)
console.log(null === undefined);  // false (strict equality)


// 7. Type coercion using c + b
console.log("\nQ7:");
console.log(c + b); // "1010" (number becomes string)

// Fix:
console.log("\nQ7:");
console.log(c + Number(b)); // 20
console.log(c + +b);        // 20


// 8. Check NaN after division
console.log("\nQ8:");
let result = c / "a";
console.log(result); // NaN
console.log(Number.isNaN(result)); // true


// 9. Convert b to number (two ways)
console.log("\nQ9:");
let num1 = Number(b);
let num2 = +b;
console.log(num1, num2); // 10 10


// 10. Convert c to string (two ways)
console.log("\nQ10:");
let str1 = String(c);
let str2 = c.toString();
console.log(str1, str2); // "10" "10"


// 11. Convert any value to boolean
console.log("\nQ11:");
console.log(Boolean(c)); // true
console.log(!!c);        // true


// 12. const reassignment error
console.log("\nQ12:");
const x = 100;
// x = 200; // ❌ Error: Assignment to constant variable


// 13. Primitive copy proof
console.log("\nQ13:");
let original = 50;
let copy = original;
copy = 100;

console.log(original); // 50
console.log(copy);     // 100


// 14. Looks true but false
console.log("\nQ14:");
console.log([] == []); // false (different references)


// 15. Fix implicit type conversion bug
console.log("\nQ15:");
let value1 = "5";
let value2 = 5;

console.log(value1 == value2);  // true (coercion)
console.log(value1 === value2); // false

// Fix:
console.log(Number(value1) === value2); // true

// ======================================================
// END OF FILE
// ======================================================
