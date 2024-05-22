const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'Untitled Project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
    default: ''
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    default: 'N/A'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions?',
    default: ''
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
    default: 'N/A'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
    default: 'N/A'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'Apache License 2.0',
      'Boost Software License 1.0',
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'MIT License',
      'Mozilla Public License 2.0',
      'The Unlicense',
      'Other'
    ],
    default: 'Other'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
    default: 'N/A'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    default: 'N/A'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
