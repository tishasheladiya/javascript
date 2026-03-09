// performance-optimization:

// debouncing

//

let btn = document.querySelector("button");
let body = document.querySelector("body");

function chagenColor(delay){
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, delay);
}

btn.addEventListener("click", () => {
    chagenColor(3000);
});

let inp = document.querySelector("input");

function print(fnc ,delay){
    let timer;
    return function(...agrs){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...agrs);
        }, delay);
    };
}

inp.addEventListener(
    "input",
    print(function () {
        console.log("debounce", inp.value);
    }, 500),
);


// throttle

function throttlePrint(fnc ,delay){
    let timer;
    return function(...agrs){
        clearInterval(timer);
        timer = setInterval(function(){
            fnc(...agrs);
        }, delay);
    };
}

inp.addEventListener(
    "input",
    throttlePrint(function () {
        console.log("Throttle", inp.value);
    }, 1000),
);

// ======= why website is slow?? ====
// causes:
// ram usage keeps increasing
// Browser tab crashes
// multiple duplicate event triggers
// big size images


// how to stop
// 1. image loadind -- lazy loading
// lazy loading function
const lazy = new IntersectionObserver(
    
)



// 2. big js file
// 3. reflows and repaints
// 4. memory leaks
// 5. 