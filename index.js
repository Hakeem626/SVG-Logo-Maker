const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate SVG based on user input
function generateSVG(text, textColor, shape, shapeColor) {
  // Create an SVG string using template literals
  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <!-- Add your SVG elements here based on user input -->
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
      <!-- Add the shape here based on user input -->
    </svg>
  `;
  return svg;
}

// Use Inquirer to get user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length <= 3) return true;
        return 'Character limit exceeded (max 3 characters).';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    // Generate the SVG
    const svg = generateSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    // Save the SVG to a file
    fs.writeFileSync('logo.svg', svg);

    // Provide feedback
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });
