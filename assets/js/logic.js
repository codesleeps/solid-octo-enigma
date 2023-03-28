// 🤖≠≠≠≠≠CODING QUIZ CHALLENGE≠≠≠≠≠🤖
//Section list
const quizSections = document.querySelectorAll('.quiz-section');

//Start button
const startSection = document.getElementById('start');
const startBtn = document.getElementById('start-button');

//Quiz questions
const quizSection = document.getElementById('quiz-questions');

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
