//Section list
const quizSections = document.querySelectorAll('.quiz-section');

//Start button
const startSection = document.getElementById('start');
const startBtn = document.getElementById('start-button');

//Quiz questions
const quizSection = document.getElementById('quiz-questions');
// Countdown
const timeRemaining = document.getElementById('time-remaining');
const question = document.getElementById('question');
const choices = document.getElementById('choices');
const choiceStats = document.querySelectorAll('.choice-status');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');

//End
const endSection = document.getElementById('end');
const endTitle = document.getElementById('end-title');
const score = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitScore = document.getElementById('submit-score');
const errorMessage = document.getElementById('error-message');

//  ========= EVENT LISTENERS ============
startBtn.addEventListener('click', startGame);
choices.addEventListener('click', processChoice);
submitScore.addEventListener('submit', processInput);

//  ======= START GAME ============
function startGame() {
	showElement(quizSections, quizSection);

	displayTime();
	displayQuestion();

	startTimer();
}

//  ============= SHOWING/HIDING ELEMENTS ===============
function showElement(siblingList, showElement) {
	for (element of siblingList) {
		hideElement(element);
	}
	showElement.classList.remove('hidden');
}

function hideElement(element) {
	if (!element.classList.contains('hidden')) {
		element.classList.add('hidden');
	}
}
// =============TIME ================
function displayTime() {
	timeRemaining.textContent = totalTime;
}

function startTimer() {
	totalTimeInterval = setInterval(function () {
		totalTime--;
		displayTime();
		checkTime();
	}, 1000);
}

function checkTime() {
	if (totalTime <= 0) {
		totalTime = 0;
		endGame();
	}
}
// questions
function displayQuestion() {
	question.textContent = questionList[currentQuestion].question;

	displayChoiceList();
}

function displayChoiceList() {
	choices.innerHTML = '';

	questionList[currentQuestion].choices.forEach(function (answer, index) {
		const li = document.createElement('li');
		li.dataset.index = index;
		const button = document.createElement('button');
		button.textContent = index + 1 + '. ' + answer;
		li.appendChild(button);
		choices.appendChild(li);
	});
}

//when user answers a question
function processChoice(event) {
	const userChoice = parseInt(event.target.parentElement.dataset.index);

	resetChoiceStatusEffects();
	checkChoice(userChoice);
	getNextQuestion();
}

//Displaying choice status
function resetChoiceStatusEffects() {
	clearTimeout(choiceStatusTimeout);
	styleTimeRemainingDefault();
}

function styleTimeRemainingDefault() {
	timeRemaining.style.color = '#4616E8';
}

function styleTimeRemainingWrong() {
	timeRemaining.style.color = '#E81648';
}

function checkChoice(userChoice) {
	if (isChoiceCorrect(userChoice)) {
		displayCorrectChoiceEffects();
	} else {
		displayWrongChoiceEffects();
	}
}

function isChoiceCorrect(choice) {
	return choice === questionList[currentQuestion].indexOfCorrectChoice;
}

function displayWrongChoiceEffects() {
	deductTimeBy(10);

	styleTimeRemainingWrong();
	showElement(choiceStats, wrong);

	choiceStatusTimeout = setTimeout(function () {
		hideElement(wrong);
		styleTimeRemainingDefault();
	}, 1000);
}

function deductTimeBy(seconds) {
	totalTime -= seconds;
	checkTime();
	displayTime();
}

function displayCorrectChoiceEffects() {
	showElement(choiceStats, correct);

	choiceStatusTimeout = setTimeout(function () {
		hideElement(correct);
	}, 1000);
}

//Get next question
function getNextQuestion() {
	currentQuestion++;
	if (currentQuestion >= questionList.length) {
		endGame();
	} else {
		displayQuestion();
	}
}
// =========== ENDING GAME ============
function endGame() {
	clearInterval(totalTimeInterval);

	showElement(quizSections, endSection);
	displayScore();
	setEndHeading();
}

function displayScore() {
	score.textContent = totalTime;
}

function setEndHeading() {
	if (totalTime === 0) {
		endTitle.textContent = 'Sorry! time out!';
	} else {
		endTitle.textContent = 'Congrats! Your done!';
	}
}
// =========== SUBMITTING INITIALS ====================
function processInput(event) {
	event.preventDefault();

	const initials = initialsInput.value.toUpperCase();

	if (isInputValid(initials)) {
		const score = totalTime;
		const highscoreEntry = getNewHighscoreEntry(initials, score);
		saveHighscoreEntry(highscoreEntry);
		window.location.href = './highscores.html';
	}
}

function getNewHighscoreEntry(initials, score) {
	const entry = {
		initials: initials,
		score: score,
	};
	return entry;
}

function isInputValid(initials) {
	let errorMessage = '';
	if (initials === '') {
		errorMessage = "You can't submit empty initials!";
		displayFormError(errorMessage);
		return false;
	} else if (initials.match(/[^a-z]/gi)) {
		errorMessage = 'Initials may only include letters.';
		displayFormError(errorMessage);
		return false;
	} else {
		return true;
	}
}

function displayFormError(errorMessage) {
	errorMessage.textContent = errorMessage;
	if (!initialsInput.classList.contains('error')) {
		initialsInput.classList.add('error');
	}
}

function saveHighscoreEntry(highscoreEntry) {
	const currentScores = getScoreList();
	placeEntryInHighscoreList(highscoreEntry, currentScores);
	localStorage.setItem('scoreList', JSON.stringify(currentScores));
}

function getScoreList() {
	const currentScores = localStorage.getItem('scoreList');
	if (currentScores) {
		return JSON.parse(currentScores);
	} else {
		return [];
	}
}

function placeEntryInHighscoreList(newEntry, scoreList) {
	const newScoreIndex = getNewScoreIndex(newEntry, scoreList);
	scoreList.splice(newScoreIndex, 0, newEntry);
}

function getNewScoreIndex(newEntry, scoreList) {
	if (scoreList.length > 0) {
		for (let i = 0; i < scoreList.length; i++) {
			if (scoreList[i].score <= newEntry.score) {
				return i;
			}
		}
	}
	return scoreList.length;
}
