fetch("https://dummyjson.com/products?limit=8")
.then(response => response.json())
.then(data => {

let products = data.products;

let clutter = "";

products.forEach(function(product){

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

document.getElementById("products-container").innerHTML = clutter;

});