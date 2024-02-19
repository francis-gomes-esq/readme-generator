// function to generate markdown for README
function generateMarkdown(data) {
	console.log('generateMarkdown', data);
	return `
	# ${data.title}
	
	## Description
	
	${data.description}	
	
	## Installation

	${data.installation}

`;
}

module.exports = generateMarkdown;
