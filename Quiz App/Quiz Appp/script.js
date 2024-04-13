const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the largest continent in the world?",
        answers: [
            {text: "Asia", correct: true}, // Corrected spelling and accuracy
            {text: "Australia", correct: false},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true}, // Corrected accuracy
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true; // Disable all buttons after selection
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.style.display = "block";
    } else {
        nextButton.innerText = "Play Again";
        nextButton.style.display = "block";
    }
    if (correct) score++;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Restart";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
        currentQuestionIndex = 0; // Reset for restart
        nextButton.style.display = "none"; // Hide next button until a question is answered
    }
});

startQuiz();
