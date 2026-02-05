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

// For each loop
// for each -- array ni darek value mate loop chalse
let i = [10,35,40,68];

i.forEach((val)=>{
    let new_val = val + 10;
    console.log(new_val);
});

[5,58,42,"hello"].forEach(val => {
    let new_arr = val + 2;
    console.log(new_arr);
});

// .map() method:
// map tyare j use karvu ke jyare ak new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10,20,50,40,15];
// same like a for each loop but map return a new array
let temp_data = data.map((val)=>{
    if (val > 20){
        return val;
    }
});
// use case -- data ma thi specific data new array ma store karvo hoi
// ex.product ma thi specific category na product new array ma store karva hoy

let marks = [10,5,20,25,15];
let final_marks = marks.map((val)=>{
    if(val == 5){
        return val +4;
    }
    return val;
});

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000,20000,30000,65000,99000,45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare

// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter to filter producat based on price 
let prosuct_type = ["mobile", "Tablet", "Laptop", "Mouse", "keyborad"];
let filter_product_type = prosuct_type.filter((type) => {
    if (type === "Tablet" || type === " keyborad") return true;
});

// reduce
// reduce tyare j use karvu ke jare ak single value calculate karvi hoi from array
let total_price =[10,68,45,58,52,48];

let final_price = total_price.reduce((accumulatior,val)=>{
    return accumulatior + val;
},0); // intial value of accumulator
// 0+10=10
// 10+68=78
//78+45=123
console.log("final price :", final_price);
// accumulator --> je value function ma retun thase te accumulator ma store thase --> accumulator name change kari sako chho
// val --> array ni darek value

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> vallback no return value nahi
// never returns what you return inside it 
// retuens the array element itself -- not return array
// .find() stops at the first match
// it dose not continue looping

let product1 = ["Laptop", "Mobile" , "Tablet", "Desktop", "Smart Watch"];
let find_product = product1.find((item)=>{
    console.log("can't find product");
    if (item === "Table"){
        return true;
    }else if (item === "desktop"){
        return true;
    } else {
        return "not found";
    }
})

//find vs filter
// real-life scenario: shopping mall security
// your are a security guard at a shopping mall
// chack the list of visitores
let people =["John",""]

// find --> you are looking for the first person names "sara" in the list and stop searching (pehli var j male, bas
// e j and anagal check j na kare)
let person = people.find((name)=> name === "sara");
console.log(person);

// filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
// let AllSara = people.filter((name)=> )

// some 
// check kare chhe ke array ma koi pan  ek item condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find()
// return value of array 
// give ans in true and false
let marks1 =[10,20,35,80];
let any = marks1.some((val)=>{
    if(val>85) return 12;
});

// every
// check kare chhe


// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// DESTRUCTURING OPRATOR -- GIVE VALUE TO variable 
// (ex. we don't use every time arr1[1], just save it
// into variable let [ , k]= arr1)
let arr4 =[1,2,3,4,5];
let [ , , k]= arr4; // --> destruturing
// let [j, , k] = arr;
console.log(k);
let user_data = ["text","text@gmail.com", "male","sural"];

// spread oprator -- copy value from main array
let arr8 = [1,2,3,4,5,6,7];
// let arr4 = arr3; // - just give reference not copy value
//(when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> est --> into function
// ... --> spred --> into Array and Object