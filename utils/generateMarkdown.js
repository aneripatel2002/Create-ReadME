function renderLicenseBadge(license) {
  const badges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  };
  return badges[license] || '';
}

function renderLicenseLink(license) {
  const links = {
    'Apache License 2.0': 'http://www.apache.org/licenses/LICENSE-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/users/license.html',
    'GNU AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'GNU LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0.en.html',
    'MIT License': 'https://choosealicense.com/licenses/mit/',
    'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/',
    'The Unlicense': 'https://choosealicense.com/licenses/unlicense/'
  };
  return links[license] || '';
}

function renderLicenseSection(license) {
  if (!license || license === 'Other') {
    return 'This project is not licensed.';
  }
  return `This project is licensed under the ${license}. For more information, please visit [${license}](${renderLicenseLink(license)}).`;
}

function renderQuestionsSection({ username, email }) {
  const githubProfile = username !== 'N/A' ? `GitHub: [${username}](https://github.com/${username})` : '';
  const contactEmail = email !== 'N/A' ? `Email: ${email}` : '';
  return [githubProfile, contactEmail].filter(Boolean).join('\n\n');
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
${renderQuestionsSection(data)}`;
}

module.exports = generateMarkdown;
