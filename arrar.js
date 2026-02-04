// array
// ["Mobile", "Laptop", "Tablet", 5000, 25 , 588]

// create
// variable_name = [values]
// let arr = [1,2,3,4];

// // access
// // position = [0,1,2,3]
// // array_name[position / index]
// arr[0]

// // modify
// // array_name[position] = new value
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// Array Methids:
// push, pop, shift, unshift, splice, slice, reverse,

// push 
let a = [1,2,3,4,5];
console.log(a)

a.push(700);
console.log(a)

//use case

let product = ["leptop", "moues", "cpu"];
console.log(product);
product.push("keybord");
console.log(product);

// pop

let b =[10,20,30,40];
console.log(b)
b.pop();
console.log(b)

//use case

let productpop = ["leptop", "moues", "cpu", "keybord"];
console.log(productpop);
productpop.pop();
console.log(productpop);

// shift -- remove first value into array
let c=[30,40,50,60];
c.shift();

// unshift
let d = [52, 35, 65, 85];
d.unshift(20);

// splice - remove value into array -- specific
// position and specific number of values
// into () - first index(position), how many valuse you wa
let e = [50,60,30,40,10];
e.splice(3,2);
// e.splice(3, 0 , 50 , 100)
// use case -- select msg and remove multiple msg at on click


// slice - copy values from array -- specific
// position and specific number of values
// new variable = array_name.slice(start index , and index)
// start index -- include into copy
// end index -- not include into copy
let f = [100,50,25,0];
let new_f= f.slice(1,3);
// use case -- copy specific data and save it into new variable
// generate a report based on data and generate a file or save the file into your local machine

//splice vs slice
// splice -- remove value into main array of modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your fronted

// sort -- set into ascending order
let h = [50,20,80,10,40];
h.sort();
// let h = [11,62,3,4,25];
// let sr = h.sort(function(a,b){
//      return a-b; // ascending order
// })

// let h = [11,62,3,4,25];
// let sr - h.sort((a,b)=>{
    //  return b-a; // decending order
    //})

    // use case -- sort product price low to high

//``````````````````````Array Method : push, pop, swift, unswift, splice, slice, reverse`````````````````````````````

// Q1. push()
// Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log("Q1:", tasks);


// Q2. pop()
// Remove the last notification.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log("Q2:", notifications);


// Q3. shift()
// Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
console.log("Q3:", customers);


// Q4. unshift()
// Add a new song at the beginning.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log("Q4:", playlist);


// Q5. splice()
// Remove 'Alex' and add 'John' and 'Sara'.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log("Q5:", students);


// Q6. splice()
// Remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log("Q6:", menu);


// Q7. slice()
// Create new array with weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
console.log("Q7:", weekend);


// Q8. reverse()
// Reverse game levels.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log("Q8:", levels);


// Q9. sort()
// Sort scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log("Q9:", scores);


// Q10. sort() numbers
// Sort prices lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log("Q10:", prices);


// Q11. slice() vs splice()
// Create new array of first 3 items WITHOUT changing original.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
console.log("Q11:", firstThree);
console.log("Original products:", products);


// Q12. splice() complex
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log("Q12:", colors);


// Q13. reverse() + push()
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log("Q13:", steps);


// Q14. sort() strings (ignore case)
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Q14:", names);


// Q15. Combination
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
console.log("Q15:", movies);


// Q16. splice() return value
let nums1 = [1, 2, 3, 4];
let removedNums = nums1.splice(1, 2);
console.log("Q16 Removed:", removedNums);
console.log("Updated nums1:", nums1);


// Q17. slice() immutability
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log("Q17 Result:", result);
console.log("Original nums2:", nums2); // unchanged


// Q19. reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log("Q19 reversedLetters:", reversedLetters);
console.log("Original letters:", letters); // changed


// Q21. splice() edge case
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log("Q21:", arr);


// Q23. slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log("Q23:", sliced);


// Q24. splice() vs slice()
// a) Update original array → splice()
// b) Keep original unchanged → slice()


// Q25. Chained methods
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log("Q25:", arr2);
