// control flow statements in javaScript

// If (condition){} --> condition true hoy to {} code run thai
if (12 < 13){
    console.log(true);
}

if (15 < 13){
    console.log(true);
}// condition is false that why if statement not run

if (!12){
    console.log("number");
}

if (!0){
    console.log("number");
}

// if-else statement
if (12 < 13){
    console.log("true");
} else {
    console.log("false");
}

if (15 < 13){
    console.log("true");
} // condition is false that why else statement run
else{
    console.log("false"); // if if statement condition is false then run this code
}

if (!12){
    console.log("number");
}else{
    console.log("not a number");
}

let loggedin = true;
let admin = false;
if (loggedin && admin){
    console.log("welcome admin");
} else if (loggedin){
    console.log("welcome user");
} else {
    console.log("go to login page");
}

let login = true;
let bookingpage = false;
if(login && bookingpage){
    console.log("show booking page");
} else if(login){
    console.log("user can book");
} else{
    console.log("go to login page");
}

// switch case
switch("BOGO")
{
 case "First50":
    console.log("you got 50% off");
    break;
 case "BOGO":
    console.log("buy one get one");
    break;
 case "BlackFriday":
    console.log("it's black friday sale - get at rs. 50");
    break;
 default:
    console.log("offer not valid");
}

//example
let mark = 85;

switch (true) {
    case mark >= 50 && mark < 60:
        console.log("D grade");
        break;
    case mark >= 60 && mark < 70:
        console.log("C grade");
        break;
    case mark >= 70 && mark < 80:
        console.log("B grade");
        break;
    case mark >= 80 && mark < 90:
        console.log("A grade");
        break;
    default:
        console.log("Invalid score");
}

// Early return pattern
function score(value){
    if(value > 90){
        return "value is more than 90";
    }else if (value < 80){
        return "value is less than 80";
    }else if (value < 70){
        return "value is less than 70";
    }else if (value < 60){
        return "value is less than 60";
    }else{
        return "value is less";
    }
}
score(100)
console.log(score(100));

// function score1(value){
//     if(value > 90) return "value is more than 90";
//     if (value < 80) return "value is less than 80";
//     if (value < 70) return "value is less than 70";
//     if (value < 60) return "value is less than 60";
//     return "value is less";
// }
// score1(55)
// console.log(score1(55));

function score1(value) {
    if (value > 90) return "value is more than 90";
    if (value < 60) return "value is less than 60";
    if (value < 70) return "value is less than 70";
    if (value < 80) return "value is less than 80";
    return "value is between 80 and 90";
}

console.log(score1(85));

//```````````````````````````````````````````````````````````````````````

let x = 2;
switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score <= 89) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 33 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

// Test
console.log(getGrade(95)); // A+
console.log(getGrade(55)); // D
console.log(getGrade(-5)); // Invalid Marks


function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return "Draw";
    }

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return player1;
    } else {
        return player2;
    }
}

// Test
console.log(rockPaperScissors("rock", "scissors"));   // rock
console.log(rockPaperScissors("paper", "rock"));     // paper
console.log(rockPaperScissors("scissors", "paper")); // scissors
console.log(rockPaperScissors("rock", "rock"));      // Draw

//for loop
for (let i = 1; i <= 10; i++){
    console.log(i);
}

for (let k = 9; k >= 1; k--){
    console.log(k);
}

for (let j = 1; j <= 10; j++){
    document.writeln("Hello<br>");
    console.log("Hello")
}

for (let m = 1; m <= 10; m++){
    console.log(m * m);
}

let d=1;
while (d <= 10){
    console.log("while loop", d);
    d++;
}

//make it true loops
let ak = 1;
while (ak <= 10){
    console.log(ak);
    ak++;
}

let c=10;
while (c <= 20){
   console.log("while loop", c);
   c++;
} 

let da=1;
while (da <= 28){
   console.log("while loop daaaaaa", da);
   da++;
}

let f= 50;
while (f <= 68){
   console.log("while loop fffff", f);
   f++;
}

let q=50;
while (q <= 68){
   console.log("while loop qqqqqq", q);
   q++;
}

let d1= 55;
while (d1 <= 60) {
     console.log(d1);
     d1++;
}

let f1 = 50;
while (f1 <= 60) {
     console.log(f1);
     f1++;
}

let q1 = 50;
while (q1 <= 60) {
     console.log(q1);
     q1++;
}