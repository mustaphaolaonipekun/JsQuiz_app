const quizData = [
    {
        question:"What technology is used to power self-driving cars?",
        a:"LiDAR",
        b:"Bluetooth",
        c:"NFC",
        d:" RFID",
        correct:"a",
    },
    {
        question:"What is the name of the technology that uses a network of decentralized computers to store and manage data?",
        a:"Artificial intelligence",
        b:"Cloud computing",
        c:"Virtual reality",
        d:"Blockchain",
        correct:"d",
    }, 
      {
        question:"What is the name of the technology that allows computers to understand and interpret human language?",
        a:"Machine learning",
        b:"Deep learning",
        c:"Natural language processing",
        d:"Computer vision",
        correct:"c",
    },   {
        question:"What is the name of the technology that enables wireless charging of electronic devices?",
        a:"Qi",
        b:"NFC",
        c:"Bluetooth",
        d:"Wifi",
        correct:"a",
    },   {
        question:"What technology is used to create realistic 3D models of objects and environments?",
        a:"Augmented reality",
        b:"Virtual reality",
        c:"3D printing",
        d:"3D Scanning",
        correct:"d",
    },
    {question:"What is the name of the technology that allows people to control electronic devices using their thoughts?",
        a:" Brain-computer interface",
        b:"Augmented reality",
        c:"Virtual reality",
        d:"5G",
        correct:"a",
    },
    {
        question:"What technology is used to power smart home devices?",
        a:"Radar",
        b:"Bluetooth",
        c:"Zigbee",
        d:"Sonoff 5",
        correct:"c",
    },
    {
        question:"What is the name of the technology that allows cars to communicate with each other and with road infrastructure?",
        a:"Radar",
        b:"V2x",
        c:"Sonar",
        d:"Sonoff 5",
        correct:"c",
    },
    {
        question:"What is the name of the technology that allows for the wireless transfer of large amounts of data over short distances?",
        a:"Bluetooth",
        b:"V2x",
        c:"Zigbee",
        d:"Sonoff 5",
        correct:"a",
    },
    {
        question:"What is the name of the technology that uses algorithms to analyze and interpret large sets of data?",
        a:"Machine learning",
        b:"Deep learning",
        c:"Artificial intelligence",
        d:"Natural language processing",
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








