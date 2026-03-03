let d =20;
function abc(){
    console.log(d);
}
function def(){
    let d =25;
    abc();
}
def();
// clg ans --> 20

function parent(){
    let a = 12;
    return function (){
        console.log(a);
    };
}
let fnc1 = parent();
fnc1();   
// console.log --> 12

// counter
function counter(){
    let a = 0;
    return function(){
        a++;
        console.log(a);
    };
}

let fnc = counter();
fnc();
fnc();
fnc();
fnc();
fnc();

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

//create toaster
function CreateToaster(config){
    

    let toast = document.querySelector(".toast")
    
    return function(noti){
        let div = document.createElement("div");
        div.classList = `toaster ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-red-950 border-2 border-red-950"} px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;

        toast.className += ` ${config.positionX === "left" ? "left-10" : "right-10"} ${config.positionY === "bottom" ? "bottom-10" : "top-10"}`




        div.textContent = noti;

        toast.appendChild(div);

        
        setTimeout(()=>{
            toast.removeChild(div);    
        }, config.duration * 1000);
    };
}

let toaster = CreateToaster({
    positionX : "right",
    positionY:"bottom",
    theme:"light",
    duration:3,
});

toaster("Welcome to Dashborad");
setTimeout(()=>{
    toaster("you have 2 new notifications");
},3000);

setTimeout(()=>{
    toaster("producat upload successfully");
},3500);