//Questions
class Question {
	constructor(question, choices, indexOfCorrectChoice) {
		this.question = question;
		this.choices = choices;
		this.indexOfCorrectChoice = indexOfCorrectChoice;
	}
}
const question1 = new Question(
	'What is the primary psychoactive compound in cannabis?',
	[
		'Cannabidiol (CBD).',
		'Cannabinol (CBN).',
		'Tetrahydrocannabinol (THC).',
		'Cannabigero (CBG).',
	],
	2
);
const question2 = new Question(
	'What are the two main species of cannabis?',
	[
		'Skunk',
		'Cheese',
		'Cannabis sativa and Cannabis indica.',
		'Northern Lights',
	],
	2
);
const question3 = new Question(
	' In which country was the first medical cannabis program established?',
	[
		'U.K.',
		'Netherlands',
		'Israel',
		'U.S.A.',
	],
	1
);
const question4 = new Question(
	'What is the process called for removing cannabiniods from cannabis plants?',
	[
		'Decarbing',
		'Purging',
		'Filteration',
		'Extraction',
	],
	3
);
const question5 = new Question(
	'What does the acronym GG4 stand for?',
	[
		'Grow Greens 4',
		'Garden Grow 4',
		'Guerilla Glue 4',
		'Great Ganga 4',
	],
	2
);

const questionList = [question1, question2, question3, question4, question5];

let currentQuestion = 0;

let totalTime = 90;
let totalTimeInterval;
let choiceStatusTimeout;
