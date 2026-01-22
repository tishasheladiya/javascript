// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, *, **, %
// + --> add and concatenate
// ex. 1+2 --> add
// "user" + "name" --> concat
// 5 + "5" --> concat, 5+5 --> add
// -

// Comparison (ans: true, false)
// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" (check type and value, strict comparison)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !==
// ex. 12 !== "12" (reverse of ===)
// >=
// ex. 22 >= 22
// <=
// ex. 13 <= 13
// <
// ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 22 > 113, 12 > 9, 13 > 13

// assignment
// =
// give a value, value assignment operator
// ex. let a =12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
// ex. a -= 4; (subtract value from old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)

// logical operators
// && (And)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14>15 --> false
// true && false --> false 12<13 && 14>15 --> false
// false && false --> false 12>13 && 14>15 --> false

// || (Or)
// ex. true || true --> true 12<13 || 14<15 --> true
// false || true --> true 12<10 || 14>15 --> false
// true || false --> true 12<13 || 14>15 --> true
// false || false --> false 12>13 || 14>15 --> false

// ! (Not)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

// unary operators
// = - ! typeof == --
// +
// covert string to number
//ex. +"5" --> 5
// +"Name" --> NaN
// "5" + 5 --> "55"
// -"5" + 5 --> 0
//-
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. ++a + a => 26
// --
// ex. let a = 3;
// a--
// a++

// ternary
// ? :
// condition ? true thase to print thase : false thase to print thase
// let a = 12>13 ? console.log("true") : console.log("false");

// typeof null --> object
// typeof [] --> object, let a=[]; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mare use karvo
// instanceof --> reference data type mare use karvo