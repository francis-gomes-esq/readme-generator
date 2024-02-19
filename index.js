const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'what is your-project-title?',
			},
			{
				type: 'input',
				name: 'description',
				message:
					'Provide a short description explaining of your project.',
			},

			{
				type: 'input',
				name: 'installation',
				message: 'What are the steps required to install your project?',
			},
		])
		.then(answers => {
			console.log(answers);
			console.log(answers.title);
			console.log(answers.description);
			console.log(answers.installation);

			const template = generateMarkdown(answers);
			console.log(template, 'template');

			fs.writeFile('utils/readme.md', template, err => {
				console.log(err);
			});
		});
}

// function call to initialize program
init();
