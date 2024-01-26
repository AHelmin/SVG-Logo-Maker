const inquirer = require("inquirer")
const fs = require('fs')
const Square = require("./lib/Square")
const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Logo = require("./lib/Logo")

//variable to store user prompt questions
const questions = [
  {
    type: 'input',
    message: 'Please enter your company letters(up to 3).',
    name: 'letters',
    validate: input => input.length <= 3,
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

//function grabs the user input and sends the data to the correct shape function
async function logoInformation() {
  const logoInfo = await inquirer.prompt(questions);
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
};

//if circle, then new circle object created and method is invoked to create svg text, then sent to write 
function newCircle(newLogo) {
  const newCircle = new Circle(newLogo.shape, newLogo.shapeColor, newLogo.letterColor, newLogo.letters);
  const logo = newCircle.render();
  writeToFile('Logo.svg', logo);
};

//if square, then new square object created and method is invoked to create svg text, then sent to write 
function newSquare(newLogo) {
  const newSquare = new Square(newLogo.shape, newLogo.shapeColor, newLogo.letterColor, newLogo.letters);
  const logo = newSquare.render();
  writeToFile('Logo.svg', logo);
};

//if triangle, then new triangle object created and method is invoked to create svg text, then sent to write 
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

