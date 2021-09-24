const h = document.querySelector("#height");
const b = document.querySelector("#base");
const btnCheck = document.querySelector("#btn");
const message = document.querySelector("#show-msg");
let hypo = 0;
btnCheck.addEventListener("click", function isTriangle(){
    h1 = parseInt(h.value)
    b1 = parseInt(b.value)

    area = 0.5 * h1 * b1 ;
    console.log(area)
    showMessage("Area = " + area)

});

showMessage = (msg) => {
    message.innerText = msg 
}