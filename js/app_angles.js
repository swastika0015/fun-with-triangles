const A1 = document.querySelector("#angle1");
const A2 = document.querySelector("#angle2");
const A3 = document.querySelector("#angle3");
const btnCheck = document.querySelector("#btn");
const message = document.querySelector("#show-msg")

btnCheck.addEventListener("click", function isTriangle(){
    a1 = parseInt(A1.value)
    a2 = parseInt(A2.value)
    a3 = parseInt(A3.value)

    console.log(a1)

    if (a1+a2+a3 === 180){
        showMessage("Yesss! These angles form a Triangle😀")
    }
    else{
        console.log("jhii")
        showMessage("No, try another combination!😐")
    }
});

showMessage = (msg) => {
    message.innerText = msg 
}