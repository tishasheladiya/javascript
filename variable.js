//var , let  and const in JavaScript
// var (ES5)
//var a = "temp";
var _123 = "HEllo";
var $123 = "Hello";

//var = "number";

//b= 24; //never use

// let (ES6)
let temp = "abc";

// const
const temp_const = "hello world";

// declarations and initialization
var d;
var temp_d = 12;

// var add value into scoped
// var is function scoped
// var can be re-declared and reassigned
var name = "user name";
let name1 = "user name";

var temp1 = 12;
//temp = "number"; // Reassignment
//var temp1 = "text"; // redeclaration

// let temp_a = 24;
// var temp_a = 34; // you cannot redeclare let variable

const temp_b = "name";
//temp_b = " username"; // you cannot reassign const variable

// scope (global , Block , Fanction)
var e = 23;//global scope
console.log("Global Scope " +e);

{
    var e = 25; // block scope
    console.log("Block Scope " +e);
}

function abc(){
    var e = 30; // function scope
    console.log("Function Scope " +e);
}

abc();
console.log("Outside " +e);

//--------------------------------------------------

let f = 23;//global scope
console.log("Global Scope " +f);

{
   let f = 25; // block scope
    console.log("Block Scope " +f);
}

function abc(){
   let f = 30; // function scope
    console.log("Function Scope " +f);
}

abc();
console.log("Outside " +f)

//--------------------------------------------------

//temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);
//console.log(j);
//let j = 12;

// hoisting Imapact
// Hoisting --> when your craect a vaiable into js that braek
// into two part first is declare part that go to up and there
// initialization part that go down

var temp_d = 12;

// var temp_d; --> undefined ; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined;

let temp_d_let = 24;

// let variable not use before initialization
// if you use console.log before initialization that give you Error;
// hoisting impact on var , let , const

/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/

//ex:1

//console.log(nm);
//let nm = "name";

//ex:2

// console.log(b);
// var b = "username";

//ex:3

// var x = 1;
// {
// var x= 2;
// }
// console.log(x);

//ex:4

// let a = 10;
// {
//     let a = 20;
//     console.log("Inside:", a);
// }
// console.log("Outside:", a);

//ex:5

const person = {name: "demo"};
//on console.log
person.name= "user"; 
person = {} ; 