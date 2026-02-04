// // function
// // what --> function is a block of code that perform a 

// function temp_cart(){
//     console.log("Adding Producat")
// }

// temp_cart();
// temp_cart();
// temp_cart();

// // parameters vs arguments

// function cart(producat,price){
//     console.log("Adding Producat : " , producat , " , price : " ,price)
// }

// cart("Mobile" , 20000)
// cart("Mobile" , 20000)
// cart("Mobile" , 20000)

// //
// let cart1 =function (producat,price){

//     console.log("Adding Producat : " , producat , " , price : " ,price)
// }

// cart1("Mobile" , 20000)
// cart1("Mobile" , 20000)
// cart1("Mobile" , 20000)

// // arrow function
// // let cart2 =function (producat,price){

// //     console.log("Adding Producat : " , producat , " , price : " ,price)
// // }

// // cart2("Mobile" , 20000)
// // cart2("Mobile" , 20000)
// // cart2("Mobile" , 20000)

// // Default, rest amd spread parameters in function
// // default
// function abc(v1, v2){
//     console.log(v1, v2);
// }
// abc(20,21);

// // rest --> jayre function ma multiple arguments pass kerva to vadhare params banava pade
// // chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo
// // function na parameter ni anadar lakhvama aave chhe)

// function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){
//     console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
// }
// abcd(1,2,3,4,5,6,7,8,9,10)

// // retrun or early return
// function getValue1(value) {
//     if (value < 25) return "value is less than 25";
//     else if (value < 25) return "value is less than 50";
//     else if (value < 25) return "value is less than 75";
//     return "value is 100 or more";
// }
// let result = getValue1(80);
// console.log(result)

// // first class function
// // function can be treated as variables

// // function can be passed as argument to other functions

// // function can be returned from other function


// //First class function
// let buynow1= function (producat, price){
//     console.log(producat, price)
// }

// buynow1("s24 fe", 50500);

// // convert into arrow function
// let buynow01 = (product, price) => {
//     console.log(product, price);
// };

// buynow01("arrow s24 fe", 50500);


// // function can be passed as argument to other function
// // let fun = function(){}
// function abc1(v1,v2){
//     console.log(v2);
//     return v1();
// }
// abc1(function(){
//     console.log("first class function")
// }, "Hello")

// function abc2(v1,v2){
//     console.log(v2);
//     return v1();
// }
// abc2(function(){
//     console.log("first class function")
// }, "Hello")

// // function can be returned from other function
// function abc(){
//     return function (){
//         console.log("function within function")
//     }
// }
// abc()();

// function abc2(){
//     return() => {
//         console.log("arrow function within function")
//     }
// }
// abc2()();

// // higher order function (HOF)
// // function that takes another function as an argument or returns a
// // function as a result (eva function je return kare ek function athava
// // acpect kare ek function params ma)

// // function abcd(val){val();}
// // --> abcd(function(){console.log("hello")})
// // function abcd(val){} --> higher order function

// // function abcd(){ return function(){} } abcd()() --> higher order

// // pure vs impure function
// // pure function --> function je same input par same output aapse ane
// // koi bahar na state ne modify na kare (impure function --> je
// // function bahar na state ne modify kare)
// let a=20;
// function change_a(){
//     return "a not change(pure function) " + a;
// }

// console.log(change_a());

// // impure function 1

// function change_a1(){
//     a++;
//     return "a change (impure function) " +a;
// }
// console.log(change_a1());

// // impure function 2

// function change_a2(){
//     a += 1;  
//     return "a change (impure function) " +a;
// }
// console.log(change_a2());

// // closure function

// function outer(){
//     let outer_var = "Outer function variable";
//     function inner(){
//         console.log(outer_var);
//     }
//     inner();
// }
// outer();

// // lexical scope --> nested function can access variables declared in
// // their outer scope

// function outer1(){
//     let outer_var = "outer function variable";
//     function inner1(){
//         console.log(outer_var);
//         let inner_var = "inner functionn variable";
//         function most_inner(){
//             console.log(outer_var);
//             console.log(inner_var);
//             // function inner01_var(){

//             // }
//         }
//         most_inner();
//     }
//     inner1();
// }
// outer1();

// //hoisting in function
// // use case --> show project structure
// temp_fnc();

// function temp_fnc(){
//     console.log("hoisting in function")
// }

// temparrow_fnc();
// const temparrow_fnc = () => {
//     console.log("hoisting in function");
// };


//``````````````````````excerise```````````````````````````
/***********************************
 Example 1:
 Difference between Function Declaration
 and Function Expression (Hoisting)
************************************/

/*
Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- Not hoisted
- Cannot be called before definition
*/


/***********************************
 Example 2:
************************************/

greet(); // ✅ Works because function declaration is hoisted

function greet() {
    console.log("Hello!");
}

// Ans: Hello!
// Why: Function declaration is hoisted


/***********************************
 Example 3:
 Convert normal function to Arrow
************************************/

// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 8

// How: function keyword removed, => used


/***********************************
 Example 4:
 Parameters vs Arguments
************************************/

function welcome(name) { // name → parameter
    console.log("Welcome " + name);
}

welcome("user"); // "user" → argument

// Why:
// Parameter → variable in function definition
// Argument → actual value passed while calling function


/***********************************
 Example 5:
************************************/

function temp(a, b, c) {
    console.log(a, b, c);
}

temp(1, 2);

// Ans: 1 2 undefined
// Why:
// Parameters = 3 (a,b,c)
// Arguments = 2 (1,2)
// Missing parameter becomes undefined


/***********************************
 Example 6:
 Default Parameter
************************************/

function temp_user(name = "Guest") {
    console.log("Hello " + name);
}

temp_user();

// Ans: Hello Guest
// Why: Default value is used when no argument is passed


/***********************************
 Example 7:
 Rest Operator (...)
************************************/

function number(...numbers) {
    console.log(numbers);
}

number(1, 2, 3, 4, 5);

// Ans: [1, 2, 3, 4, 5]
// Why:
// ... operator collects multiple arguments into an array
// Used when number of arguments is unknown


/***********************************
 Example 8:
 Rest Parameters + Total
************************************/

// ❌ Wrong loop (error because <= length)
function calculateTotalWrong(...scores) {
    let total = 0;
    for (let i = 0; i <= scores.length; i++) {
        total += scores[i]; // last value undefined
    }
    return total;
}

// ✅ Correct version using forEach
function calculateTotal(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    });
    return total;
}

let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);

// Ans: 150
// Why: forEach safely iterates over array values


/***********************************
 Example 9:
 Early Return
************************************/

function checkAge(age) {
    if (age < 18) {
        return "Too Young"; // early return
    }
    return "Access Granted";
}

console.log(checkAge(16));
console.log(checkAge(22));

// How:
// Early return stops function execution immediately


/***********************************
 Example 10:
 Return Value
************************************/

function f() {
    return;
}

console.log(f());

// Ans: undefined
// Why:
// return without value returns undefined

/***********************************
 Example 11:
 Functions are first-class citizens
************************************/

/*
Meaning:
Functions in JavaScript can be:
1. Stored in variables
2. Passed as arguments
3. Returned from other functions
*/


/***********************************
 Example 12:
 Assign function to variable
************************************/

let a = function () {
    console.log("Hello");
};

a(); // Output: Hello

// Yes, functions can be stored inside variables


/***********************************
 Example 13:
 Pass function into another function
************************************/

function abcd(val) {
    val();
}

abcd(function () {
    console.log("Hello");
});

// Why:
// Functions can be passed as arguments
// This is called callback function


/***********************************
 Example 14:
 Higher Order Function
************************************/

/*
Definition:
A function that:
1. Accepts another function as argument OR
2. Returns another function
*/

function higher(fn) {
    fn();
}

higher(() => console.log("Higher Order Function Example"));


/***********************************
 Example 16:
 Pure or Impure Function
************************************/

let total = 5;

function num(num) {
    total += num;
}

num(3);
console.log(total);

// Ans: Impure Function
// Why:
// Function modifies external variable "total"


/***********************************
 Example 17:
 Convert into Pure Function
************************************/

function pureNum(total, num) {
    return total + num;
}

console.log(pureNum(5, 3));

// Pure Function:
// Same input → Same output
// No external variable modified


/***********************************
 Example 18:
 Closure
************************************/

/*
Definition:
Closure is when inner function remembers
outer function variables even after
outer function execution ends.
*/

function outerClosure() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const closureExample = outerClosure();
closureExample();


/***********************************
 Example 19:
************************************/

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter(); // 1
counter(); // 2

// Why:
// Closure remembers "count" variable


/***********************************
 Example 20:
 Convert into IIFE
************************************/

(function () {
    console.log("Initialized");
})();

// IIFE = Immediately Invoked Function Expression
// Runs immediately after creation


/***********************************
 Example 21:
 Use of IIFE (Private Variables)
************************************/

let fun = (function () {
    let score = 0; // private variable

    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        }
    };
})();

fun.getScore(); // 0
fun.setScore(50);
fun.getScore(); // 50

// Real world use:
// Data privacy / Encapsulation


/***********************************
 Example 22:
************************************/

// temp_var(); ❌ Uncomment to see error

var temp_var = function () {
    console.log("Hello");
};

/*
Ans: Error
Why:
Variable is hoisted but function expression is NOT initialized yet.
temp_var becomes undefined initially.
*/


/***********************************
 Example 23:
************************************/

temp_var2(); // ✅ Works

function temp_var2() {
    console.log("Hello");
}

/*
Ans: Hello
Why:
Function declaration is fully hoisted
*/
