// function
// what --> function is a block of code that perform a 

function temp_cart(){
    console.log("Adding Producat")
}

temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments

function cart(producat,price){
    console.log("Adding Producat : " , producat , " , price : " ,price)
}

cart("Mobile" , 20000)
cart("Mobile" , 20000)
cart("Mobile" , 20000)

//
let cart1 =function (producat,price){

    console.log("Adding Producat : " , producat , " , price : " ,price)
}

cart1("Mobile" , 20000)
cart1("Mobile" , 20000)
cart1("Mobile" , 20000)

// arrow function
// let cart2 =function (producat,price){

//     console.log("Adding Producat : " , producat , " , price : " ,price)
// }

// cart2("Mobile" , 20000)
// cart2("Mobile" , 20000)
// cart2("Mobile" , 20000)

// Default, rest amd spread parameters in function
// default
function abc(v1, v2){
    console.log(v1, v2);
}
abc(20,21);

// rest --> jayre function ma multiple arguments pass kerva to vadhare params banava pade
// chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo
// function na parameter ni anadar lakhvama aave chhe)

function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){
    console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
}
abcd(1,2,3,4,5,6,7,8,9,10)

// retrun or early return
function getValue1(value) {
    if (value < 25) return "value is less than 25";
    else if (value < 25) return "value is less than 50";
    else if (value < 25) return "value is less than 75";
    return "value is 100 or more";
}
let result = getValue1(80);
console.log(result)

// first class function
// function can be treated as variables

// function can be passed as argument to other functions

// function can be returned from other function