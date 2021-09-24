const quizForm = document.querySelector("#quiz");
const btnSubmit = document.querySelector("#btn");
const result = document.querySelector("#show-msg");

const answers = ["60°", "Right Angled Triangle", "180°", "3a"]

btnSubmit.addEventListener("click", showResult());


function showResult(){
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === answers[i]){
            score += 2.5;
        }
        i +=1
    }
    result.innerText = "your score is " + score + "😋";
}
