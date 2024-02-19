// function to generate markdown for README
function generateMarkdown(data) {
	console.log('generateMarkdown', data);
	return `
	# ${data.title}
	
	## Description	
	${data.description}

	## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Email](#email)
  - [GitHub](#github)
	
	## Installation
	${data.installation}

`;
}

module.exports = generateMarkdown;
