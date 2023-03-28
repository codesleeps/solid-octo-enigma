//Questions
class Question {
	constructor(question, choices, indexOfCorrectChoice) {
		this.question = question;
		this.choices = choices;
		this.indexOfCorrectChoice = indexOfCorrectChoice;
	}
}
const question1 = new Question(
	'What does API stand for?',
	[
		'Application Programmable Interface',
		'Application Programming Interface',
		'Application Programs Interface',
		'Application Programmable Interface',
	],
	2
);
const question2 = new Question(
	'What does the pop() function do?',
	[
		'removes the first element from an array and returns that element.',
		'removes the last variable from an array and returns that element.',
		'Removes the last element from an array and returns that element.',
		'removes the first variable from an array and returns that element.',
	],
	2
);
const question3 = new Question(
	'What does the map() function do?',
	[
		'The map() method creates a new array populated with the results of calling a provided function on every variable in the calling array.',
		'The map() method creates a new variable populated with the results of calling a provided function on every element in the calling array.',
		'The map() method creates a new array populated with the results of calling a provided function on every element in the calling variable.',
		'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
	],
	3
);
const question4 = new Question(
	'What does CSS stand for?',
	[
		'Cascading Styles Sheet',
		'Casscading Style Sheets',
		'Cascading Style Sheets',
		'Cascading Styles Sheets',
	],
	2
);
const question5 = new Question(
	'What does the acronym SQL stand for?',
	[
		'Structured Query Line',
		'Structured Query Linear',
		'Structured Query Label',
		'Structured Query Language',
	],
	3
);

const questionList = [question1, question2, question3, question4, question5];

let currentQuestion = 0;

let totalTime = 90;
let totalTimeInterval;
let choiceStatusTimeout;
