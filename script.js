const quizData = [
    {
        question: "What is the hottest planet in the solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Earth",
        d: "Mars",
        correct: "b",
    },
    {
        question: "What symbol is on Captain America's shield?",
        a: "A diamond",
        b: "A star",
        c: "A heart",
        d: "A four leaf clover",
        correct: "b",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Kenya",
        b: "Greece",
        c: "Vatican City",
        d: "Norway",
        correct: "c",
    },
    {
        question: "How many points did Michael Jordan score on his first NBA game?",
        a: "12",
        b: "16",
        c: "30",
        d: "45",
        correct: "b",
    },
    {
        question: "Who bought Michael Scott's World's Best Boss Mug?",
        a: "Pam",
        b: "Dwight",
        c: "Michael",
        d: "Jim",
        correct: "c",
    },
    {
        question: "What does CPU stand for in computer terminology?",
        a: "Central program unit",
        b: "Computer processing unit",
        c: "Computer program unit",
        d: "Central processing unit",
        correct: "d",
    },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.restart()">Restart</button>
            `;
        }
    }
});