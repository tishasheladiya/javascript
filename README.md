Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Error</p>
<p>Why : Uncaught ReferenceError: Cannot access 'nm' before initialization </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined</p>
<p>Why : undefined</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or ancd Error: 2</p>
<p>Why : -</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20 Outside: 10</p>
<p>Why : - </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: Error</p>
<p>Why :Uncaught TypeError: Assignment to constant variable.</p>
</div>

<hr>
<!-- ---------------------------javascripe datatype----------------------------------------------- -->
<h1>Javascript Datatype:</h1>

<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1 </p>
<p>Why : - </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1 </p>
<p>Why : - </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: '1212' </p>
<p>Why : - </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false </p>
<p>Why : - </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11 </p>
<p>Why : - </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: 'hello5' </p>
<p>Why : - </p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: undefined  null</p>
<p>Why : - </p>
</div>
 
 <!-- ---------------------------ternary ----------------------------------------------- -->
# Ternary Operator (Conditional Operator)

Ternary Operator એ `if-else` condition ને **એક જ line માં લખવાની short way** છે.  
આ operator code ને **short, clean અને readable** બનાવે છે.

---

## Syntax

```js
condition ? expression_if_true : expression_if_false;

How It Works

Condition true હોય તો ? પછીનો code execute થાય

Condition false હોય તો : પછીનો code execute થાય

Example
let age = 18;

let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(result);

Output
Eligible to vote

Example (Find Maximum Number)
let a = 10;
let b = 20;

let max = a > b ? a : b;

console.log(max);

Output
20

Example (Login Check)
let isLoggedIn = false;

let message = isLoggedIn ? "Welcome User" : "Please Login";

console.log(message);

if-else vs Ternary Operator
if-else
if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}

Ternary Operator
result = age >= 18 ? "Adult" : "Minor";

When to Use Ternary Operator

Simple condition માટે

Code short રાખવા માટે

Complex logic માટે avoid કરવો

Key Points

Ternary Operator ને Conditional Operator પણ કહે છે

? : symbols વપરાય છે

JavaScript, Java, C, C++, PHP માં support કરે છે

Code readability improve કરે છે