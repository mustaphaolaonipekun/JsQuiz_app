const quizData = [
    {
        question:"What is the process of identifying vulnerabilities in a computer system or network?",
        a:"Penetration testing",
        b:"Social engineering",
        c:"Phishing",
        d:"Malware",
        correct:"a",
    },
    {
        question:"What is the term for a type of cyber attack that involves blocking access to a computer system or network until a ransom is paid?",
        a:"Phishing",
        b:"Malware",
        c:"DDoS attack",
        d:"Ransomware",
        correct:"d",
    }, 
      {
        question:"What is the name of the authentication method that involves using a physical object such as a key or token?",
        a:"Multi-factor authentication",
        b:" Password authentication",
        c:"Biometric authentication",
        d:"Token authentication",
        correct:"a",
    },   {
        question:"What is the term for a type of cyber attack that involves tricking someone into revealing sensitive information by pretending to be a trustworthy entity?",
        a:"Convolutional neural network (CNN)",
        b:"Recurrent neural network (RNN)",
        c:"Feedforward neural network",
        d:"Autoencoder",
        correct:"a",
    },   {
        question:"Which type of robot is designed to assist with tasks such as cleaning or cooking in a home environment?",
        a:"Spoofing",
        b:"Phishing",
        c:"Malware",
        d:" DDoS attack",
        correct:"b",
    },
    {question:"What is the name of the security principle that restricts access to information to only those who are authorized to access it?",
        a:"Confidentiality",
        b:"Integrity",
        c:"Availability",
        d:"Access Control",
        correct:"d",
    },
    {
        question:"What is the name of the security principle that ensures that only authorized users can modify or delete data?",
        a:"Confidentiality",
        b:"Integrity",
        c:"Availability",
        d:"Access Control",
        correct:"b",
    },
    {
        question:"What is the name of the type of malware that is designed to spread itself to other computers on a network without the user's knowledge?",
        a:"Virus",
        b:"Trojan",
        c:"Worm",
        d:"Malware",
        correct:"c",
    },
    {
        question:"What is the term for the process of disguising a message or data so that it cannot be easily understood by anyone who intercepts it?",
        a:"Encryption",
        b:"DeEncryption",
        c:"Authentication",
        d:"Authorization",
        correct:"a",
    },
    {
        question:"What is the name of the security principle that ensures that data is accurate and consistent?",
        a:"Confidentiality",
        b:"Integrity",
        c:"Availability",
        d:"Access Control",
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








