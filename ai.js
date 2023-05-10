const quizData = [
    {
        question:"What is the term for the process of a machine learning algorithm improving its performance over time without being explicitly programmed?",
        a:" Reinforcement learning",
        b:"Deep learning",
        c:"Unsupervised learning",
        d:"Machine learning",
        correct:"d",
    },
    {
        question:"What is the name of the AI system developed by IBM that competed against human champions on the quiz show Jeopardy!?",
        a:"Watson",
        b:"AlphaGo",
        c:"DeepMind",
        d:"Siri",
        correct:"a",
    }, 
      {
        question:"What is the name of the technology that allows a robot to sense and interpret its environment?",
        a:"Computer vision",
        b:"Radar",
        c:"Lidar",
        d:"Sonar",
        correct:"a",
    },   {
        question:"Which type of neural network architecture is designed to analyze visual data and is often used for tasks such as image classification?",
        a:"Convolutional neural network (CNN)",
        b:"Recurrent neural network (RNN)",
        c:"Feedforward neural network",
        d:"Autoencoder",
        correct:"a",
    },   {
        question:"Which type of robot is designed to assist with tasks such as cleaning or cooking in a home environment?",
        a:"Data augmentation",
        b:"Transfer learning",
        c:"Adversarial training",
        d:"Bayesian optimization",
        correct:"a",
    },
    {question:"What is the name of the AI technique used to generate new data that is similar to existing data?",
        a:"Data augmentation",
        b:"Industrial robots",
        c:"Medical robots",
        d:" Robotic explorers",
        correct:"d",
    },
    {
        question:"Which type of machine learning algorithm is used for tasks such as classification and regression, and is often used as a baseline algorithm?",
        a:"Support vector machine (SVM)",
        b:"Random forest",
        c:"Gradient boosting",
        d:"K-nearest neighbors (KNN)",
        correct:"a",
    },
    {
        question:"Which type of robot is designed to operate in environments that are too hazardous or difficult for humans to access?",
        a:"Service robots",
        b:"Industrial robots",
        c:"Medical robots",
        d:" Robotic explorers",
        correct:"d",
    },
    {
        question:"What is the term for the process of an AI system making decisions based on a set of rules and conditions?",
        a:"Supervised learning",
        b:"Unsupervised learning",
        c:"Rule-based reasoning",
        d:"Reinforcement learning",
        correct:"c",
    },
    {
        question:"What is the name of the technology that allows a robot to sense its position and movement in a physical space?",
        a:"Watson",
        b:"Alpha Go",
        c:"Siri",
        d:"DeepMind",
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
}, 1000000); 








