let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let productData;

fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(product => {

productData = product;

document.getElementById("product-image").src = product.thumbnail;

document.getElementById("product-title").innerText = product.title;

document.getElementById("product-price").innerText = "$" + product.price;

document.getElementById("product-description").innerText = product.description;

document.getElementById("product-rating").innerText = product.rating;

});

function addToCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(productData);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart");

}