// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",(dets)=>{
//     console.log(dets.key);
//     h1.textContent = dets.key;
// })

let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {

    if (dets.key === " ") {
        h1.textContent = "SPACE BAR";
    } else {
        h1.textContent = dets.key;
    }

});
