// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const userInputs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What should be included in your table of contents?',
      name: 'table of contents',
    },
    {
      type: 'input',
      message: 'How is your project installed?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How should your project be used?',
      name: 'usage',
    },
    {
      type: 'list',
      choices: ['MIT', 'Apache 2.0', 'Boost', 'ISC', 'Eclipse', 'None'],
      message: 'Choose a license for your application.',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Enter your contribution guidelines.',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Describe how to test your project.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
      // use this user name to make the GitHub profile link `github.com/${data.username}
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      // instructions on how to reach me with additional questions
    },
  ])
  .then((response) =>
  fs.writeFile('README.md', generateMarkdown(response), (err) =>
  
  err ? console.error(err) : console.log('README created!')
  )
)};

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, generateMarkdown(data)) {}

// TODO: Create a function to initialize app
// function init() {

// };

// // Function call to initialize app
// init();
userInputs();
