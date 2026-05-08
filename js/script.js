let infoHoverTax = document.getElementById("svgTax");
let infoHoverDevlivery = document.getElementById("svgDelivery");

 let boxContainerTax = document.getElementById("spanTax");
 let boxContainerDeliver = document.getElementById("spanDelivery");

 let expressButton = document.getElementById("expressButton");
 let freeButton = document.getElementById("freeButton");

 let continueButton = document.getElementById("continueButton");
 let checkoutButton = document.getElementById("checkoutButton");

 let taxAmount = document.getElementById("taxAmount"); 
 let discountAmount = document.getElementById("discountAmount"); 
 let totalAmount = document.getElementById("totalAmount");
 let deliveryAmount = document.getElementById("deliveryAmount")

 let expressPrice = 10;
 let freePrice = 0;
 let discount = 10;

 

 let promoInput = document.getElementById("promocode");
 let promocodes = ["ANDREAS", "TOMMY", "MONA", "LINNEMILIE", "TINDRA", "EVEN"];
 promoInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        let code = promoInput.value.trim().toUpperCase();
        if(promocodes.includes(code)){
            discountAmount.textContent = discount.toFixed(2) + "$";

        }else{
            discountAmount.text = 0.00 + "$"
        }
    }
 })


 function updateTotalAmount(){
   
 }

 setInterval(updateTotalAmount)



expressButton.addEventListener("click", () =>{
    expressButton.classList.toggle("active");
    freeButton.classList.remove("active");
    deliveryAmount.textContent = expressPrice.toFixed(2) + "$";
})

freeButton.addEventListener("click", () =>{
    freeButton.classList.toggle("active");
    expressButton.classList.remove("active");
    deliveryAmount.textContent = freePrice.toFixed(2) + "$";
})

continueButton.addEventListener("click", () =>{
    window.location.href = "../index.html";
})

checkoutButton.addEventListener("click", () =>{
    window.location.href = "./checkout.html";
})

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



