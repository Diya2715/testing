const questions = [
    {
        question: "Which Scottish castle is said to be haunted by the ghost of a former resident, Lady Janet Douglas?" ,
        answers: [
            { text: "Edinburgh Castle" , correct: false},
            { text: "Stirling Castle" , correct: false},
            { text: "Eilean Donan Castle" , correct: false},
            { text: "Glamis Castle" , correct: true},

        ]
    },
    {
        question: "What is the name of the famous lake in Scotland, known for its mysterious monster sightings?" ,
        answers:[
            {text:"Loch Awe", correct: false},
            {text:"Loch Ness", correct: true},
            {text:"Loch Lomond", correct: false},
            {text:"Loch maree", correct: false},

        ]
    },
    {
        question: "Which Scottish island is home to Fingal's Cave, a natural wonder formed from hexagonally jointed basalt columns?" ,
        answers:[
            {text:"Isle of Skye", correct: false},
            {text:"Isle of Mull", correct: false},
            {text:"Isle of Staffa", correct: true},
            {text:"Isle of Arran", correct: false},

        ]   
    },
    {
        question: "In which Scottish city can you find the Royal Yacht Britannia, once the floating residence of the British Royal Family?" ,
        answers:[
            {text:"Glasgow", correct: false},
            {text:"Dundee", correct: false},
            {text:"Aberdeen", correct: false},
            {text:"Edinburgh", correct: true},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();
