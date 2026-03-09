let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

let clutter = "";
let total = 0;

cart.forEach(function(product, index){

total += product.price;

clutter += `

<div class="card mb-3 p-3">

<div class="row align-items-center">

<div class="col-md-2">
<img src="${product.thumbnail}" class="img-fluid">
</div>

<div class="col-md-6">
<h5>${product.title}</h5>
</div>

<div class="col-md-2">
$${product.price}
</div>

<div class="col-md-2">
<button class="btn btn-danger" onclick="removeItem(${index})">
Remove
</button>
</div>

</div>

</div>

`;

});

container.innerHTML = clutter;

document.getElementById("cart-total").innerText = total;

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

location.reload();

}