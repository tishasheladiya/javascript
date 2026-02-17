let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(inp[0].value);
    console.log(inp[1].value);
    console.log(inp[2].value);
    console.log(inp[3].value);
    console.log(inp[4].value);

    // create
    let card = document.createElement("div");
    let dp_div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");
    //console.log(card , img , h3 , h4 , h5 , h6, dp_div);

    // add class
    card.classList.add("card");
    dp_div.classList.add("dp-img");

    // add into html
    document.body.append(card);

    // Add child
    card.appendChild(dp_div);
    dp_div.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    console.log(card);

    

    // text content add
    img.setAttribute("src", inp[0].value);
    h3.textContent = inp[1].value;
    h4.textContent = inp[2].value;
    h5.textContent = inp[3].value;
    h6.textContent = inp[4].value;

    // set defauil
    img.setAttribute("src","data:image/jpeg;base64,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");
    h3.textContent="user name";
    h3.textContent="user bio";
    h3.textContent="user email";
    h3.textContent="user phon number";

    // input clear
    inp.forEach(inp => {
        if(inp.value !== "Submit"){
            inp.value = " ";
        }
    })
});