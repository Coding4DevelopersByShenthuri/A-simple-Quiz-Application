const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Rhinoceros", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: false },
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: true },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        question: "What is the most spoken language in the world?",
        answers: [
            { text: "English", correct: true },
            { text: "Hindi", correct: false },
            { text: "Spanish", correct: false },
            { text: "Arabic", correct: false },
        ] 
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Africa", correct: false },
            { text: "South America", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "Russia", correct: false },
            { text: "Canada", correct: false },
            { text: "China", correct: true },
            { text: "USA", correct: false },
        ]
    },
    {
        question: "Which animal is known as the Ship of the Desert?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Camel", correct: true },
            { text: "Rhino", correct: false },
        ]
    },
    {
        question: "Which is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Leopard", correct: false },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "America", correct: false },
            { text: "Japan", correct: true },
            { text: "Canada", correct: false },
            { text: "Sri Lanka", correct: false },
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


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
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
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        showScore();
    }
});


startQuiz();        