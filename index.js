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
				message: 'What is the title of your project?',
			},
			{
				type: 'input',
				name: 'description',
				message: 'Provide a short description explaining your project.',
			},

			{
				type: 'input',
				name: 'installation',
				message: 'What are the steps required to install your project?',
			},

			{
				type: 'input',
				name: 'usage',
				message: 'Provide instructions and examples for use:',
			},
			{
				type: 'list',
				name: 'license',
				message: 'Choose a license for your project:',
				choices: [
					'Apache License 2.0',
					'MIT License',
					'GNU General Public License v3.0',
					'Creative Commons Zero v.10 Universal',
					'Mozilla Public License 2.0',
					'The Unlicense',
				],
			},
			{
				type: 'input',
				name: 'contributing',
				message: 'Provide contribution guidelines:',
			},

			{
				type: 'input',
				name: 'tests',
				message: 'Provide test instructions:',
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
