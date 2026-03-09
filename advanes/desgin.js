// Design Patterns:
// to make a scalable project or write a thousand lines of code you have to learn about design pattern

// Module Pattern (IIFE)
// Module Pattern ek design pattern chhe, jema aapde code ek self executing function (IIFE) ni andar lakhiye chhiye
// jethi variable and function private rahe

// in this fnc we can only return that values or fnc that we want to use outside

// main feature of this pattern is data hiding(encapsulation) and clean structure, secure code, reusable and manageable code


// IIFE

let bank = (function () {

let bankbalance = 10000;

function CheckBalance() {
    console.log(bankbalance);
}

function SetBalance(val) {
    bankbalance += val;
}

function withdraw(val) {
    if (val < bankbalance) {
        bankbalance -= val;
        console.log("New Balance", bankbalance);
    }
    else{
        console.log("Insufficient Balance");
    }
}

return {
    CheckBalance,
    SetBalance,
    withdraw
}

})();



// Factory Function Example

function createLaptop(name, price, CompanyName){

    let stock = 10;

    return{
        name,
        price,
        CompanyName,

        buy(qty){
            if (qty < stock){
                stock -= qty;
                console.log(`Booked ${name}, left stock are : ${stock}`);
            } 
            else {
                console.error(`We Don't have these many pieces. We only have : ${stock}`);
            }
        },

        refillStock(qty){
            stock += qty;
            console.log(`Stock Updated. New Stock ${stock}`);
        },

    };
}

let samsung = createLaptop("S26 Ultra", 140000, "Samsung");
let kitkat = createLaptop("Kitkat", 20, "Nestle");


// Observer Pattern Example (Youtube)

class Youtube {

    constructor() {
        this.subscribers = [];
    }

    CountUser(){
        let total = this.subscribers.length;
        console.log("You have total :", total , "Subscribers");
    }

    Subscribe(user){
        this.subscribers.push(user);
        console.log(`Your new subscriber is ${user.name}`);
    }

    notify(data){
        this.subscribers.forEach((user)=>{
            user.update(data);
        });
    }

}

class Subscriber {

    constructor(name) {
        this.name = name;
    }

    update(data){
        console.log(this.name + " received notification : " + data);
    }

}

let laminds = new Youtube();

let sub1 = new Subscriber("test_user1");
let sub2 = new Subscriber("test_user2");

laminds.Subscribe(sub1);
laminds.Subscribe(sub2);

laminds.CountUser();

laminds.notify("New Video Uploaded!");



// 1️⃣ News Channel Notification System

class NewsChannel {

    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        console.log(user.name + " subscribed to News Channel");
    }

    publishNews(news){
        this.subscribers.forEach((user)=>{
            user.update(news);
        });
    }

}

class NewsUser{

    constructor(name){
        this.name = name;
    }

    update(news){
        console.log(this.name + " received news: " + news);
    }

}

let channel = new NewsChannel();

let user1 = new NewsUser("Rahul");
let user2 = new NewsUser("Amit");

channel.subscribe(user1);
channel.subscribe(user2);

channel.publishNews("Breaking News: New Technology Released!");



// 2️⃣ Online Store Offer Notification

class OnlineStore{

    constructor(){
        this.customers = [];
    }

    subscribe(customer){
        this.customers.push(customer);
        console.log(customer.name + " subscribed for offers");
    }

    newOffer(offer){
        this.customers.forEach((customer)=>{
            customer.update(offer);
        });
    }

}

class Customer{

    constructor(name){
        this.name = name;
    }

    update(offer){
        console.log(this.name + " received offer: " + offer);
    }

}

let store = new OnlineStore();

let c1 = new Customer("Riya");
let c2 = new Customer("Karan");

store.subscribe(c1);
store.subscribe(c2);

store.newOffer("Flat 50% Discount on Shoes!");



// 3️⃣ Weather Update System

class WeatherStation{

    constructor(){
        this.users = [];
    }

    subscribe(user){
        this.users.push(user);
        console.log(user.name + " subscribed for weather updates");
    }

    setWeather(weather){
        this.users.forEach((user)=>{
            user.update(weather);
        });
    }

}

class WeatherUser{

    constructor(name){
        this.name = name;
    }

    update(weather){
        console.log(this.name + " received weather update: " + weather);
    }

}

let station = new WeatherStation();

let u1 = new WeatherUser("Kavya");
let u2 = new WeatherUser("Neha");

station.subscribe(u1);
station.subscribe(u2);

station.setWeather("Today temperature is 32°C");