// Game State
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer = 30;
let timerInterval;
let startTime;
let questions = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const timerElement = document.getElementById('timer');
const currentQuestionElement = document.getElementById('currentQuestion');
const currentScoreElement = document.getElementById('currentScore');
const progressFill = document.getElementById('progressFill');

// Start Quiz Function
function startQuiz(category) {
    currentCategory = category;
    questions = [...quizData[category]].sort(() => Math.random() - 0.5); // Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();

    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    showQuestion();
    startTimer();
}

// Show Question Function
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsElement.appendChild(optionElement);
    });

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    updateProgress();
    resetTimer();
    nextBtn.disabled = true;
    selectedAnswer = null;
}

// Select Answer Function
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answerIndex;
    const options = document.querySelectorAll('.option');
    const correctAnswer = questions[currentQuestionIndex].correct;

    // Show correct and incorrect answers
    options.forEach((option, index) => {
        if (index === correctAnswer) {
            option.classList.add('correct');
        } else if (index === answerIndex && index !== correctAnswer) {
            option.classList.add('incorrect');
        } else if (index === answerIndex) {
            option.classList.add('selected');
        }
        option.style.pointerEvents = 'none';
    });

    // Update score
    if (answerIndex === correctAnswer) {
        score++;
        currentScoreElement.textContent = score;
    }

    nextBtn.disabled = false;
    clearInterval(timerInterval);
}

// Timer Functions
function startTimer() {
    timer = 30;
    timerElement.textContent = timer;
    timerElement.classList.remove('warning');

    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 10) {
            timerElement.classList.add('warning');
        }

        if (timer <= 0) {
            clearInterval(timerInterval);
            if (selectedAnswer === null) {
                selectAnswer(-1); // Auto-select wrong answer
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimer();
}

// Next Question Function
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Update Progress Function
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
}

// Show Results Function
function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const totalTime = Math.round((Date.now() - startTime) / 1000);
    const percentage = Math.round((score / questions.length) * 100);

    // Update result display
    document.getElementById('finalScore').textContent = `${score}/${questions.length}`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = questions.length - score;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('timeTaken').textContent = totalTime + 's';

    // Set score circle style and message
    const scoreCircle = document.getElementById('scoreCircle');
    const resultMessage = document.getElementById('resultMessage');

    if (percentage >= 80) {
        scoreCircle.className = 'score-circle excellent';
        resultMessage.textContent = '🎉 Excellent! You\'re a quiz master!';
    } else if (percentage >= 60) {
        scoreCircle.className = 'score-circle good';
        resultMessage.textContent = '👍 Good job! Keep practicing!';
    } else if (percentage >= 40) {
        scoreCircle.className = 'score-circle average';
        resultMessage.textContent = '📚 Not bad! Room for improvement!';
    } else {
        scoreCircle.className = 'score-circle poor';
        resultMessage.textContent = '💪 Keep studying and try again!';
    }
}

// Restart Quiz Function
function restartQuiz() {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');

    // Reset all variables
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    currentScoreElement.textContent = '0';
    clearInterval(timerInterval);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
    // Game is ready to start
});