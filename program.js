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
        question:"Which tag is used to define a hyperlink in HTML?",
        a:"<img>",
        b:"<a>",
        c:"<img>",
        d:"<div>",
        correct:"b",
    }, 
      {
        question:"Which CSS property is used to change the text color?",
        a:"font-size",
        b:"background-color",
        c:"color",
        d:"text-change",
        correct:"c",
    },   {
        question:"Which tag is used to define a table in HTML?",
        a:" <table>",
        b:"<tr>",
        c:"<td>",
        d:"<th>",
        correct:"a",
    },   {
        question:"Which of the following is a correct way to declare a JavaScript variable?",
        a:"var 1x",
        b:" var x_2",
        c:"var $x;",
        d:"var &x;",
        correct:"c",
    },
    {
        question:"Which CSS property is used to set the height of an element?",
        a:"width",
        b:"height",
        c:"tall",
        d:"size",
        correct:"b",
    },{
        question:"What is the output of the following JavaScript code? var x = [1, 2, 3]; console.log(x[2]);",
        a:"1",
        b:"2",
        c:"3",
        d:"undefined;",
        correct:"c",
    },{
        question:"Which of the following is a correct way to link an external CSS file to an HTML document?",
        a:" <link href='style.css'> ",
        b:"<style src='style.css'>",
        c:"<link rel='stylesheet' src='style.css'>",
        d:"<link rel='stylesheet' href='style.css'>",
        correct:"c",
    },{
        question:"Which tag is used to define a list in HTML?",
        a:"<ol>",
        b:" <li>",
        c:"<ul>",
        d:"Both a & c;",
        correct:"d",
    },{
        question:"Which JavaScript function is used to change the content of an HTML element",
        a:"document.getElementByName()",
        b:" document.getElementById()",
        c:"document.getElementByClass()",
        d:"document.getElementByTag()",
        correct:"b",
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
        ${score}/ ${quizData.length} questions. <i class="fa-solid fa-smile fa-beat-fade"></i></h2> 
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








