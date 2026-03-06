// Object Oriented Javascript
// OOPS
// dar vakhat blueprint banavo ke objectrt is kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevay chhe Object Oriented Programming

// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects

// blueprint -- contructor
// function based contructor --> Contructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, qty, color) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;

    //write
    this.write = function(msg){
        let h1 = document.createElement("h1")
        h1.textContent = msg;
        h1.style.color = color;
        console.log(this);

        document.querySelector("body").appendChild(h1);
    }

    // erase function
    this.erase = function () {
      document.body.innerHTML = "";
    };
}// blue print

let pencil = new CreatePencil("Doms", 100, 10, "black");
let pencil1 = new CreatePencil("Nataraj", 100, 20, "red");

// jo0 construction function koi field tena prototype ma add (attech) kari de to te filed badha object ma available thase

CreatePencil.prototype.shape = "round";

// what is prototype: prot

// why use class: class is more readable and easier to understand than construction function
class createPen{
    constructor(name, price, qty, color){
        // what is constructor: constructor is a special method which
        // is called when an object is created, it is used to initialize
        // the object

        // why use constructor: constructor is used to intialize the
        // object, it is called automatically when an object is created,
        // it is used to set the initial values of the object
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.color = color;

        //write
        this.write = function(msg){
            let h1 = document.createElement("h1")
            h1.textContent = msg;
            h1.style.color = color;
            console.log(this);

            document.querySelector("body").appendChild(h1);
        };

        // erase function
        this.erase = function () {
        document.body.innerHTML = "";
        };
    }
}

let pen = new createPen("cell0", 160, 10, "green");
let pen1 = new createPen("Reynold", 200, 10, "red");


//extends 

class User {
    constructor(name, email, passeord) {
        this.name = name;
        this.email = email;
        this.password = passeord;
        this.role = "user";
    }
}

let user = new User("test", "test@test.com", "abc@123");
console.log("user", user);

class Admin extends User {
    constructor(name, email, password, rights) {
        super(name, email, password) // extend class contructor --> super
        this.role = "admin";
    }
}

let admin = new Admin(
    "Admin",
    "admin@gmail.com", 
    "abc@123",
    "delete user, edit user, create user",
)
console.log(admin)