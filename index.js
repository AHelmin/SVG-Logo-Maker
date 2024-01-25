const inquirer = require("inquirer")
const Square = require("./lib/Square")
const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Shapes = require("./lib/Shapes")


const questions = [
  {
      type: 'input',
      message: 'Please enter the title of your project.',
      name: 'title',
  },
