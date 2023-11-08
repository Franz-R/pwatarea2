const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        choices: {
            A: "Londres",
            B: "Berlín",
            C: "París"
        },
        correctAnswer: "C"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        choices: {
            A: "Marte",
            B: "Venus",
            C: "Júpiter"
        },
        correctAnswer: "C"
    },
    {
        question: "¿Cuál es el animal terrestre más rápido?",
        choices: {
            A: "Leopardo",
            B: "Guepardo",
            C: "Elefante"
        },
        correctAnswer: "B"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    document.getElementById("choiceA").textContent = question.choices.A;
    document.getElementById("choiceB").textContent = question.choices.B;
    document.getElementById("choiceC").textContent = question.choices.C;
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        return;
    }

    const userAnswer = selectedChoice.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    selectedChoice.checked = false;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    scoreElement.textContent = score;
}

document.getElementById("submit").addEventListener("click", checkAnswer);
displayQuestion();