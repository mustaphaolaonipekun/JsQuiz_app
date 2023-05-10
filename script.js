const quizData = [
    {
        question:"What does HTML stands for?",
        a:"HYPER TEXT MARKUP LANGUAGE",
        b:"HYPERS TEST MARK LABEL",
        c:"HYPER TEXT MARKUP LANGUAGE",
        d:"HIGHER TEXT MARKUP LABEL",
        correct:"a",
    },
    {
        question:"Is Mechatronics a field of Engineering?",
        a:"i don't know",
        b:"maybe",
        c:"no",
        d:"yes",
        correct:"d",
    }, 
      {
        question:"Which of this is not a field in engineering  ",
        a:"Computer",
        b:"Civil",
        c:"Local",
        d:"Electricity",
        correct:"c",
    },   {
        question:"A programmer can also be called a ______ ",
        a:"Complier",
        b:"Developer",
        c:"Code Man",
        d:"Program Man",
        correct:"b",
    },   {
        question:"is okay to study",
        a:"yes",
        b:"maybe",
        c:"no",
        d:"ifyes",
        correct:"a",
    },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers(); 
    
const currentQuizData = quizData[currentQuiz];
questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}
 
 function getSelected(){
let answer = undefined;

answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
           answer = answerEl.id;
        }
    });

    return answer;
    
 }

function deselectAnswers() {
answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
});

}

submitBtn.addEventListener("click", () => { 
    // currentQuiz++;

   const answer = getSelected();

   if (answer) {
    if (answer === quizData[currentQuiz].correct){
        score++;
    }
   
    currentQuiz++;

    if (currentQuiz < quizData.length) {
       loadQuiz();    
     }
    else {
       quiz.innerHTML = `<h2>You successfully answered
        ${score}/ ${quizData.length} questions.</h2> 
        <button onclick="location.reload()">Reload</button>`;
    }
}

});


let start = setInterval(() => 
{
    let now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
}, 1000);

setTimeout(()=> {
    clearInterval(start);
    document.getElementById("time").innerHTML = "Time up";
}, 5000000); 








