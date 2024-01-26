const inquirer = require("inquirer")
const fs = require('fs')
const Square = require("./lib/Square")
const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Logo = require("./lib/Logo")


const questions = [
  {
      type: 'input',
      message: 'Please enter your company letters(up to 3).',
      name: 'letters',
  },
  {
    type: 'input',
    message: 'Please enter the letter color(use color names or hexadecimal color notation).',
    name: 'letterColor',
},
{
  type: 'list',
  message: 'Which logo shape would you like?',
  name: 'shape',
  choices: ['square', 'circle', 'triangle']
},
{
  type: 'input',
  message: 'Please enter the background color(use color names or hexadecimal color notation).',
  name: 'shapeColor',
}]

async function logoInformation() {
  const logoInfo = await inquirer.prompt(questions);
  if (logoInfo.letters.length > 3) {
    console.log('Please enter 3 or less letters.');
    logoInformation();
  }
  const newLogo = new Logo(logoInfo.shape, logoInfo.shapeColor, logoInfo.letterColor, logoInfo.letters);
  if (newLogo.shape === 'circle') {
    newCircle(newLogo)
  }
  if (newLogo.shape === 'square') {
    newSquare(newLogo)
  }
  if (newLogo.shape === 'triangle') {
    newTriangle(newLogo)
  }
  console.log(newLogo)
};

function newCircle(newLogo) {
  const newCircle = new Circle(newLogo.shape, newLogo.shapeColor, newLogo.letterColor, newLogo.letters);
  const logo = newCircle.render();
  console.log(logo)
  writeToFile('Logo.svg', logo);
};

function newSquare(newLogo) {
  const newSquare = new Square(newLogo.shape, newLogo.shapeColor, newLogo.letterColor, newLogo.letters);
  const logo = newSquare.render();
  writeToFile('Logo.svg', logo);
};

function newTriangle(newLogo) {
  const newTriangle = new Triangle(newLogo.shape, newLogo.shapeColor, newLogo.letterColor, newLogo.letters);
  const logo = newTriangle.render();
  writeToFile('Logo.svg', logo);
};

//function writes SVG file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
  )
};

//function initializes app
function init() {
  logoInformation();
};

// Function call initializes app
init();

