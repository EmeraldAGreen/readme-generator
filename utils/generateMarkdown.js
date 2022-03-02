// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Boost': 
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0': 
      return `Read more about [Apache 2.0](https://opensource.org/licenses/Apache-2.0).`
    case 'MIT':
      return `Read more about [MIT](https://opensource.org/licenses/MIT).`
    case 'Boost': 
      return `Read more about [Boost](https://www.boost.org/LICENSE_1_0.txt).`
    case 'ISC':
      return 'Read more about [ISC](https://opensource.org/licenses/ISC).'
    case 'Eclipse':
      return `Read more about [Eclipse](https://opensource.org/licenses/EPL-1.0).`
    default: 
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under  ${license}.`
}
 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions) 
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Contribution
${data.contributing}
  
## Tests
${data.tests}

## Questions
Find me on Github: [${data.username}](https://github.com/${data.username})

Email me with additional questions: ${data.email}`;
}

module.exports = generateMarkdown;
