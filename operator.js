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

let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}

let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}

let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}

let A = 0;
if(A){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}

let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

let a = 5;
a++
console.log(a);

let ab = 8;
++ab
console.log(ab);

let b = 4;
let c = b++
console.log(b, c);

let ba = 4;
let ca = ++ba
console.log(ba, ca);

let m = 10;
console.log(m--)
console.log(m);

let n = 5;
let result = n++ + ++n;
console.log(result);

// let likes = 100;
// function likePost(){
// result ++likes;
// }
// console.log(likePost());
// console.log(likes);

let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
