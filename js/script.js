let infoHoverTax = document.getElementById("svgTax");
let infoHoverDevlivery = document.getElementById("svgDelivery");

 let boxContainerTax = document.getElementById("spanTax");
 let boxContainerDeliver = document.getElementById("spanDelivery");

infoHoverTax.addEventListener("mouseenter", () =>{
    let textBox = document.createElement("div");
    let text = document.createElement("p");
    text.style.color = "White";
    text.textContent = "Info about what you should do when you get your text";
    text.style.fontSize = "1rem";
    text.style.padding = "10px";
    textBox.style.backgroundColor = "black";
    textBox.style.position = "absolute";
    textBox.style.height = "70px";
    textBox.style.width = "200px";
    textBox.style.bottom = "40px";
    textBox.style.right = "-190px";
    textBox.style.borderRadius = "16px";
    textBox.appendChild(text)
    boxContainerTax.appendChild(textBox)

    infoHoverTax.addEventListener("mouseleave", () =>{
    boxContainerTax.removeChild(textBox)
})

})



infoHoverDevlivery.addEventListener("mouseenter", () =>{
    let textBox = document.createElement("div");
    let text = document.createElement("p");
    text.style.color = "White";
    text.textContent = "Info about what you should do when you get your text";
    text.style.fontSize = "1rem";
    text.style.padding = "10px";
    textBox.style.backgroundColor = "black";
    textBox.style.position = "absolute";
    textBox.style.height = "70px";
    textBox.style.width = "200px";
    textBox.style.bottom = "40px";
    textBox.style.right = "-190px";
    textBox.style.borderRadius = "16px";
    textBox.appendChild(text)
    boxContainerDeliver.appendChild(textBox)
    
    infoHoverDevlivery.addEventListener("mouseleave", () =>{
    boxContainerDeliver.removeChild(textBox)
})

})
