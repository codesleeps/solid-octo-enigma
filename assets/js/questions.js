// Coding Quiz Game Code
// Define an array of quiz questions and answers
// 5 multiple choice questions
const questions = [
	{
		question: 'What does CSS stand for?',
		answers: [
			{ text: 'Cascading Series Sheets', correct: false },
			{ text: 'Cascading Syntax Sheets', correct: false },
			{ text: 'Cascading Style Sheets', correct: true },
			{ text: 'Cascading Software Sheets', correct: false },
		],
	},
	{
		question: 'What does the acronym SQL stand for?',
		answers: [
			{ text: 'Structured Query Line', correct: false },
			{ text: 'Structured Query Linear', correct: false },
			{ text: 'Structured Query Label', correct: false },
			{ text: 'Structured Query Language', correct: true },
		],
	},
	{
		question: 'What does API stand for?',
		answers: [
			{ text: 'Application Programmable Interface', correct: false },
			{ text: 'Application Programming Interface', correct: true },
			{ text: 'Application Programs Interface', correct: false },
			{ text: 'Application Programmable Interface', correct: false },
		],
	},
	{
		question: 'What does the pop() function do?',
		answers: [
			{
				text: 'removes the first element from an array and returns that element.',
				correct: false,
			},
			{
				text: 'removes the last variable from an array and returns that element.',
				correct: false,
			},
			{
				text: 'Removes the last element from an array and returns that element.',
				correct: true,
			},
			{
				text: 'removes the first variable from an array and returns that element.',
				correct: false,
			},
		],
	},
	{
		question: 'What does the map() function do?',
		answers: [
			{
				text: 'The map() method creates a new array populated with the results of calling a provided function on every variable in the calling array.',
				correct: false,
			},
			{
				text: 'The map() method creates a new variable populated with the results of calling a provided function on every element in the calling array.',
				correct: false,
			},
			{
				text: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
				correct: true,
			},
			{
				text: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling variable.',
				correct: false,
			},
		],
	},
];