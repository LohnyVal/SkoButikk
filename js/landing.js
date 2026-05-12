let navgiationalButton = document.querySelectorAll(".links");
let linkdeceration = document.querySelectorAll(".linksdeceration");
let cartlink = document.getElementById("carticon");
let home = document.getElementById("logo");

home.addEventListener("click", () =>{
    window.location.href = "./index.html"
})

window.addEventListener("load", () =>{
    window.scrollTo({top:0})
})

cartlink.addEventListener("click", () =>{
    window.location.href = "../html/cart.html";
})




 const products = [
    {
        id: 1,
        name: "Luxuary black glasses",
        price: 1000,
        image: "../img/sunglasses3.png",
    },
    {
        id: 2,
        name: "Luxuary black glasses",
        price: 2000,
        image: "../img/sunglasses.png",
    },
    {
        id: 3,
        name: "Luxuary black glasses",
        price: 950,
        image: "../img/sunglasses4.png",
    },
    {
        id: 4,
        name: "Luxuary black glasses",
        price: 1000,
        image: "../img/sunglasses5.png",
    }
 ];

 let totalProductsInCart = 0;

 const productContainer = document.getElementById("productsContainer");
 const cartContainer = document.getElementById("cartContainer");


    products.forEach((product, index) =>{
       productContainer.innerHTML += 
       `
       <div class="backgroundimageproduct">
           <img src="${product.image}" class="backgroundimageproductstyle">
           <button class="addtocart" onclick="addToCart(${index})">Add to cart</button>
           <p class="pricetext">${product.price}$</p>
       </div>
       `

    })  


function addToCart(index){
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartContainer.innerHTML += 
    `
    <div class="cartItems">
        <img src="${product.image}">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>
    `

}



