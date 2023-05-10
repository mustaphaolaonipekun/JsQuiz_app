const quizData = [
    {
        question:"What is the term for the process of teaching a robot a task by physically guiding its movements?",
        a:"Teleoperation",
        b:"Autonomous learning",
        c:"Reinforcement learning",
        d:"Programming by demonstration",
        correct:"d",
    },
    {
        question:"What is the name of the small computers used in robots to control their movement and behavior?",
        a:"Microprocessors",
        b:" Integrated circuits",
        c:" Transistors",
        d:"Capacitors",
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
        question:"What is the name of the software used to program robots in a graphical interface?",
        a:"MATLAB",
        b:"ROS",
        c:" Blockly",
        d:"Gazebo",
        correct:"c",
    },   {
        question:"Which type of robot is designed to assist with tasks such as cleaning or cooking in a home environment?",
        a:"Service robots",
        b:"Industrial robots",
        c:"Medical robots",
        d:" Robotic explorers",
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
        question:"What is the name of the robot developed by Boston Dynamics that can perform acrobatic movements and is often used for entertainment purposes?",
        a:"Spot",
        b:"Atlas",
        c:"Handle",
        d:"Big dog",
        correct:"bs",
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
        question:"What is the term for the process of a robot sensing its surroundings and making decisions based on that information?",
        a:"Teleoperation",
        b:"Autonomous learning",
        c:"Perception",
        d:"Planning",
        correct:"c",
    },
    {
        question:"What is the name of the technology that allows a robot to sense its position and movement in a physical space?",
        a:"GPS",
        b:"Inertial measurement unit",
        c:"Global navigation satellite system",
        d:"Compass",
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








