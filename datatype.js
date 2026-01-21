// data type:
// two type of data type:

// 1. Primitive data type
// copy --> real value

let a=5;
let b=a;

// types: string, number, boolean, null, undefined, symbol, bigint

// 2. Non-Primitive data type(reference data type) [],(),{}
//copy --> give refence of parent

let temp_d = [1, 2, 3];
let temp_e = temp_d;

// types: array [], object{}, function()

// primitive data type
// types: string, number, boolean, null, undefined, symbol, bigint
// string:
// '' -> single quotes
// "" -> double quotes
// `` -> backticks
let d = "name";
d = "username";
d = `firstname`;

// number:
let e =12;
e = 12.5;
e = -25;

// boolean:
let f = true;
f = false;

// null:
// you give a value
let g = null;

// undefined:
// you don't give a value, by defualy value
let h;

// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");

// check u1 === u2

let obj = { uid:1, name:"test", email: "test@test.com" };

let u3 = "uid";
let u4 = Symbol("uid");

// obj[u3] = "001";

//bigint:
// cheak range of number, Number.MAX_SAFE_INTEGER

let number = 9007199254740991;
number = number + 6;

let num2 = 9007199254740991n;
num2 = num2 + 4n;

// non-primitive data type
// types: array [], object{}, function()

let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age : 9, phone_number: 5589985549 };

let profiles = [
    { name: "test1", age : 10, phone_number: 5589985548 },
    { name: "test2", age : 15, phone_number: 5589985575 },
    { name: "test3", age : 11, phone_number: 5589985566 },
];
function name(params) {}

// Dynamic Typing

let u_name = "username"; // string
u_name = 25; // number
u_name = {}; // object
// javascript --> typescript(ts)

// typeof quirks
// typeof 12
// check typeof variable use --> ex. typeof NaN, typeof null, 1+ "1", 1 == "1", 1 === "1"
// why tpeof NaN --> number
// NaN is a failed number oprations that why that type is number
// ex. "hello" -5 --> NaN

// type coeration
// "5" + 1 // + --> value add and coeration(mix)
// "5" - 1

// truthy vs Falsy values
// 0, false, "", null, undefined, NaN, document.all --> false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if("-1"){}, js convert it into true
// all --> true

let x;
console.log(x);
let y = null;
console.log(y);