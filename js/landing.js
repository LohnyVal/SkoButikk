let navgiationalButton = document.querySelectorAll(".links");
let linkdeceration = document.querySelectorAll(".linksdeceration");
let cartlink = document.getElementById("carticon");
let home = document.getElementById("logo");

home.addEventListener("click", () =>[
    window.location.href = "./index.html"
])

window.addEventListener("load", () =>{
    window.scrollTo({top:0})
})

cartlink.addEventListener("click", () =>{
    window.location.href = "../html/cart.html";
})



