let startScreen = document.getElementById('start-screen');
let questionScreen = document.getElementById('question-screen');
let resultScreen = document.getElementById('result-screen');

let startBtn = document.getElementById('start-btn');
let restartBtn = document.getElementById('restart-btn');

let questionText = document.getElementById('question-text');
let answersDiv = document.getElementById('answers-div');
let timerDisplay = document.getElementById('timer');
let finalScoreE1 = document.getElementById('final-score');
let resultMsgE1 = document.getElementById('result-msg');

console.log("DOM elements loaded:", {
    startScreen,
    questionScreen,
    resultScreen,
    startBtn,
    restartBtn,
    questionText,
    answersDiv,
    timerDisplay,
    finalScoreE1,
    resultMsgE1
});

let questions = [
    {
        question: "Which declaration is used to define a constant in JavaScript?",
        answers: ["var", "let", "const", "constant"],
        correct: 3,
        explanation: "The 'const' declaration is used to define a constant in JavaScript."
    },

    {
        question: "What is a White Hat Hacker?",
        answers: ["A hacker who breaks into systems for malicious purposes", "A hacker who helps organizations secure their systems", "A hacker who is also a government employee", "A hacker who only targets other hackers"],
        correct: 2,
        explanation: "A White Hat Hacker is an ethical hacker who helps organizations identify and fix security vulnerabilities."
    },

    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "None of the above"],
        correct: 1,
        explanation: "HTML stands for HyperText Markup Language."
    },

    {
        question: "Which of the following is NOT a programming language?",
        answers: ["Python", "Java", "HTML", "JavaScript"],
        correct: 3,
        explanation: "HTML is a markup language, not a programming language."
    },

    {
        question: "What is the DMZ in networking?",
        answers: ["A type of firewall", "A secure area in a network that is exposed to the internet", "A type of encryption", "A network protocol"],
        correct: 2,
        explanation: "The DMZ (Demilitarized Zone) is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network, usually the Internet."
    },

    {
        question: "Which of the following is a common method used in social engineering attacks?",
        answers: ["Phishing", "Malware", "DDoS", "SQL Injection"],
        correct: 1,
        explanation: "Phishing is a common social engineering attack that involves tricking individuals into revealing sensitive information."
    },

    {
        question: "What is a Black Hat Hacker?",
        answers: ["A hacker who breaks into systems for malicious purposes", "A hacker who helps organizations secure their systems", "A hacker who is also a government employee", "A hacker who only targets other hackers"],
        correct: 1,
        explanation: "A Black Hat Hacker is a malicious hacker who violates computer security for personal gain."
    },

    {
        question: "What programming language is primarily used for web development?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: 2,
        explanation: "JavaScript is the primary programming language used for web development."
    },

    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        correct: 1,
        explanation: "CSS stands for Cascading Style Sheets."
    },

    {
        question: "What is a Grey Hat Hacker?",
        answers: ["A hacker who breaks into systems for malicious purposes", "A hacker who helps organizations secure their systems", "A hacker who operates between ethical and unethical hacking", "A hacker who only targets other hackers"],
        correct: 3,
        explanation: "A Grey Hat Hacker is a hacker who may violate laws or ethical standards but does not have malicious intent."
    },

    {
        question: "What is a red hat hacker?",
        answers: ["A hacker who breaks into systems for malicious purposes", "A hacker who helps organizations secure their systems", "A hacker who is also a government employee", "A hacker who targets black hat hackers"],
        correct: 4,
        explanation: "A Red Hat Hacker is an ethical hacker who takes aggressive action against black hat hackers."
    },

    {
        question: "What is the role of a QA Tester in software development?",
        answers: ["To write code for new features", "To design the user interface", "To test the software for bugs and issues", "To manage the project timeline"],
        correct: 3,
        explanation: "The role of a QA Tester is to test the software for bugs and issues before it is released."
    },

    {
        question: "What is the role of a DevOps Engineer?",
        answers: ["To develop software applications", "To manage IT infrastructure", "To automate software development processes", "To ensure software quality"],
        correct: 3,
        explanation: "The role of a DevOps Engineer is to automate software development processes and improve collaboration between development and operations teams."
    },

    {
        question: "What is the role of a Cybersecurity Engineer?",
        answers: ["To develop software applications", "To manage IT infrastructure", "To protect systems and networks from cyber threats", "To ensure software quality"],
        correct: 3,
        explanation: "The role of a Cybersecurity Engineer is to protect systems and networks from cyber threats, by designing and implementing software security measures."
    },

    {
        question: "What is the role of a Software Engineer?",
        answers: ["To develop software applications", "To manage IT infrastructure", "To test software for bugs", "To ensure software quality"],
        correct: 1,
        explanation: "The role of a Software Engineer is to develop software applications and ensure they meet user needs."
    },

    {
        question: "What is Axios in JavaScript?",
        answers: ["A JavaScript library for making HTTP requests", "A JavaScript framework for building user interfaces", "A JavaScript tool for managing state", "A JavaScript library for data visualization"],
        correct: 1,
        explanation: "Axios is a JavaScript library used to make HTTP requests from node.js or XMLHttpRequests from the browser."
    },

    {
        question: "What is Node.js?",
        answers: ["A JavaScript library for building user interfaces", "A JavaScript runtime built on Chrome's V8 JavaScript engine", "A JavaScript framework for building web applications", "A JavaScript tool for managing state"],
        correct: 2,
        explanation: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server side."
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()",],
        correct: 1,
        explanation: "In JavaScript, you create a function using the function keyword followed by the function name and parentheses."
    },

    {
        question: "How do you write an IF statement in JavaScript?",
        answers: ["if (condition) {}", "if condition {}", "if: (condition) {}", "if (condition) then {}"],
        correct: 1,
        explanation: "In JavaScript, you write an IF statement using the if keyword followed by the condition in parentheses and the code block in curly braces."
    },

    {
        question: "How do you raise an exception in JavaScript?",
        answers: ["throw", "catch", "try", "error"],
        correct: 1,
        explanation: "In JavaScript, you raise an exception using the throw statement followed by the exception object."
    },

];

console.log("Loaded quiz data: ", questions);

let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timerId = null;

console.log("Initial state set:", {
    currentIndex,
    score,
    timeLeft,
    timerId
});

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
console.log("Event listeners attached.");

function startGame() {
    console.log("startGame() called");
    currentIndex = 0;
    score = 0;
    console.log("Game state reset:", { currentIndex, score });
    swapScreens(startScreen, questionScreen);
    console.log("Switched to question screen.");
    showQuestion();
}

const showQuestion = () => {
    answersDiv.innerHTML = '';
    const q = questions[currentIndex];
    questionText.textContent = q.question;
    console.log(` Showing question ${currentIndex + 1}: ${q.question}`);

    q.answers.forEach((answer, i) => {
        let button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.index = i;
        button.setAttribute("role", "button");
        button.setAttribute("tabindex", "0");
        button.addEventListener('click', handleAnswer);
        answersDiv.appendChild(button);
        console.log(` Added answer button: ${i}:`, answer);
    });

    resetTimer();
};

function handleAnswer(e) {
    clearInterval(timerId);
    console.log("Timer stopped");

    const chosenIdx = Number(e.target.dataset.index);
    const q = questions[currentIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    console.log("Selected answer:", chosenIdx, "| Correct answer:", q.correct);

    buttons.forEach((btn) => {
        const idx = Number(btn.dataset.index);
        if (chosenIdx === -1) {
            if (idx === q.correct) btn.classList.add("correct");
        } else {
            if (idx === q.correct) btn.classList.add("correct");
            else if (idx === chosenIdx) btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (chosenIdx === q.correct) {
        score++;
        console.log("🎉 Correct answer! 🎉 Score increased to", score);
    } else {
        console.log("❌ Wrong answer.");
    } 

    setTimeout(() => {
        currentIndex++;
        console.log("Moving along! Question:", currentIndex);
        if (currentIndex < questions.length) {
            showQuestion();
        } else { 
            showResults();
        }
    }, 1200);
}


function showResults() {
    console.log("🏁 Showing results");
    swapScreen(questionScreen, resultScreen);
    finalScoreE1.textContent = `You scored ${score} / ${questions.length}!`;
    console.log("📊 Final score: ", score);

    if (score === questions.length) {
        resultMsgE1.textContent = "Supreme Quizard of Quizzardry! 🏆";
    } else if (score >= questions.length / 2) {
        resultMsgE1.textContent = " Apprentice Quizard! 🧙";
    } else { 
        resultMsgE1.textContent = "Muggle! Are you sure you can even use magic? 📚";
    }
}

function resetTimer() { 
    timeLeft = 10;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    clearInterval(timerId);
    console.log("⏱Timer reset to 10 seconds");

    timerId = setInterval(() => { 
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) { 
            clearInterval(timerId);
            console.log("⏰ Time's up! Auto submitting no answer.");
            handleAnswer({ target: { dataset: { index: -1 } } });
        }
    }, 1000)
}


function swapScreen(_, showE1) {
    const allScreens = document.querySelectorAll(".screen");
    allScreens.forEach((screen) => screen.classList.add("hidden"));
    showE1.classList.remove("hidden");
    console.log(" Switched screens to:", showE1.id);
}
