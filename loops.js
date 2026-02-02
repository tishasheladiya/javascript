// di while loop 
// do {} while (end);
// start
// do{
// code 
// change}
// while(end);

let j = 12; // start
do {
    console.log("do while loop:" ,j); // code
    j++; // change (condition)
} while (j < 20); // while check after executing code block {end}

// break
for (let k = 1; k <= 201; k++){
    if (k === 5){
        continue;
    }
    console.log(k);
}

// ``````````````````````````````````````````````````
// ==========================
// Example 1
// Print numbers from 1 to 10 using for loop
// ==========================
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ==========================
// Example 2
// Print numbers from 10 to 1 using while loop
// ==========================
let i2 = 10;
while (i2 >= 1) {
    console.log(i2);
    i2--;
}

// ==========================
// Example 3
// Print even numbers from 1 to 20 using for loop
// ==========================
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ==========================
// Example 4
// Print odd numbers from 1 to 15 using while loop
// ==========================
let i4 = 1;
while (i4 <= 15) {
    if (i4 % 2 !== 0) {
        console.log(i4);
    }
    i4++;
}

// ==========================
// Example 5
// Print multiplication table of 5
// ==========================
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// ==========================
// Example 6
// Find the sum of numbers from 1 to 100
// ==========================
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum from 1 to 100 =", sum);

// ==========================
// Example 7
// Print numbers between 1 to 50 divisible by 3
// ==========================
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// ==========================
// Example 8
// Ask user for a number and print even/odd from 1 to that number
// (Works in browser console)
// ==========================
let num = prompt("Give a number:");
num = Number(num);

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// ==========================
// Example 9
// Count numbers between 1 to 100 divisible by 3 or 5
// ==========================
let countDiv = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        countDiv++;
    }
}
console.log("Count =", countDiv);

// ==========================
// Example 10 (Break)
// Stop at first multiple of 7
// ==========================
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}

// ==========================
// Example 11 (Continue)
// Skip multiples of 3
// ==========================
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// ==========================
// Example 12 (Break + Continue)
// Print first 5 odd numbers only
// ==========================
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }

    console.log(i);
    count++;

    if (count === 5) {
        break;
    }
}
