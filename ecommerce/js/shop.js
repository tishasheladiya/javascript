// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(data => {

// let products = data.products;

// let clutter = "";

// products.forEach(function(product){

// clutter += `

// <div class="col-md-3 mb-4">

// <div class="product-card">

// <img src="${product.thumbnail}">

// <div class="product-info">

// <h4>${product.title}</h4>

// <p>$${product.price}</p>

// <a href="product.html?id=${product.id}" class="view-btn">
// View Product
// </a>

// </div>

// </div>

// </div>

// `;

// });

// document.getElementById("shop-products").innerHTML = clutter;

// });

let productsData = [];

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

productsData = data.products;

displayProducts(productsData);

loadCategories(productsData);

});


function displayProducts(products){

let clutter = "";

products.forEach(product => {

clutter += `

<div class="col-md-3 mb-4">

<div class="product-card">

<img src="${product.thumbnail}">

<div class="product-info">

<h4>${product.title}</h4>

<p>$${product.price}</p>

<a href="product.html?id=${product.id}" class="view-btn">
View Product
</a>

</div>

</div>

</div>

`;

});

document.getElementById("shop-products").innerHTML = clutter;

}


document.getElementById("search-input").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = productsData.filter(product =>
product.title.toLowerCase().includes(value)
);

displayProducts(filtered);

});


function loadCategories(products){

let categories = [...new Set(products.map(p => p.category))];

let select = document.getElementById("category-filter");

categories.forEach(cat => {

let option = document.createElement("option");

option.value = cat;

option.textContent = cat;

select.appendChild(option);

});

}


document.getElementById("category-filter").addEventListener("change", function(){

let category = this.value;

if(category === "all"){
displayProducts(productsData);
}
else{

let filtered = productsData.filter(p => p.category === category);

displayProducts(filtered);

}

});