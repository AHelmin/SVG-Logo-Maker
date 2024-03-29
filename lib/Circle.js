const Logo = require('./Logo')

class Circle extends Logo{
    constructor(shape, shapeColor, letterColor, letters) {
        super(shape, shapeColor, letterColor, letters);
        
    }
    //takes input and reutn svg string for circle background
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>
      
        </svg>`
    }
}

module.exports = Circle;