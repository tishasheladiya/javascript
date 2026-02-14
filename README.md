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

//----------------------------------------------------------------------------------------------

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p></p>
</div>

//````````````````````````````````````````````````````````````````

<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
</div>

// ````````````````````````loops````````````````````````````````````````

<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>

<!-- ```````````````````````````````````````````````````````````````````````````````````````````` -->

## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p></p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
</div>

/////////// ```````````````````````````````````````````````````````````
// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];

// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];

// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];

// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];

// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];

// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];

// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')

// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];

// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);

// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();

// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');

// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);

// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged

// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());

// # JavaScript Interview Questions & Answers (1–50)

// ================ BEGINNER LEVEL (1–20) ================

// Q1. var vs let vs const
// var → function scoped, redeclare allowed, hoisted
// let → block scoped, cannot redeclare
// const → block scoped, cannot reassign

// Q2. Primitive Data Types
// string, number, boolean, undefined, null, bigint, symbol

// Q3. Type Checking
// Use typeof operator

// Q4. == vs ===
// == value comparison (type conversion allowed)
// === value + datatype comparison

// Q5. Output → 20
// Q6. Output → "52"
// Q7. Output → false
// Q8. Function → reusable block of code
// Q9. Output → 5
// Q10. Array → let arr = [1,2,3];
// Q11. Output → 20
// Q12. Object → key-value pair collection
// Q13. Output → 20
// Q14. if → runs code if condition true
// Q15. Output → Yes
// Q16. Loop → repeat code
// Q17. Output → 0 1 2
// Q18. while → when iterations unknown
// Q19. Output → 6
// Q20. Comments → // single line, /* multi line */

// ================ INTERMEDIATE LEVEL (21–35) ================

// Q21. Block Scope → let/const inside {} only accessible inside block
// Q22. Hoisting → declarations moved to top before execution
// Q23. undefined vs null → undefined = not assigned, null = intentional empty
// Q24. Falsy → false, 0, "", null, undefined, NaN
// Q25. Arrow vs Normal → arrow has no own this
// Q26. Parameters vs Arguments → definition vs passed values
// Q27. No return → returns undefined
// Q28. push vs pop → add end vs remove end
// Q29. Loops vs Methods → loops for complex control, methods for cleaner code
// Q30. Object loop → for...in / Object.keys()
// Q31. break stops, continue skips
// Q32. 0 == false → true, 0 === false → false
// Q33. status = age >= 18 ? 'adult' : status;
// Q34. Destructuring → let [a,b] = [1,2];
// Q35. Spread → [...arr]

// ================ ADVANCED LEVEL (36–50) ================

// Q36. Closure → function remembering outer variable
// Q37. Execution Context → environment where JS runs
// Q38. Call Stack → tracks function calls
// Q39. Value vs Reference → primitives copy value, objects copy reference
// Q40. Shallow vs Deep → partial copy vs full copy
// Q41. Higher Order → function takes/returns function
// Q42. Callback → function passed as argument
// Q43. Immutability → prevents accidental data change
// Q44. Event Loop → handles async tasks
// Q45. Sync vs Async → blocking vs non-blocking
// Q46. forEach vs map → no return vs returns new array
// Q47. [] == [] → false
// Q48. typeof null → "object"
// Q49. NaN check → Number.isNaN(value)
// Q50. JS Flow → Global context → Memory phase → Execution phase → Call stack → Event loop
