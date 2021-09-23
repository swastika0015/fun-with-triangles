const h = document.querySelector("#height");
const b = document.querySelector("#base");
const btnCheck = document.querySelector("#btn");
const message = document.querySelector("#show-msg");
let hypo = 0;
btnCheck.addEventListener("click", function isTriangle(){
    h1 = parseInt(h.value)
    b1 = parseInt(b.value)

    hypo = Math.sqrt((Math.pow(h1,2)+ (Math.pow(b1,2))));
    console.log(hypo)
    showMessage(hypo + "Yesss! These angles form a Triangle😀")

});

showMessage = (msg) => {
    message.innerText = msg 
}