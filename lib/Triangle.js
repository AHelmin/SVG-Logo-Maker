const Logo = require('./Logo')

class Triangle extends Logo {
    constructor(shape, shapeColor, letterColor, letters) {
        super(shape, shapeColor, letterColor, letters);

    }
    //takes input and reutn svg string for triangle background
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>
      
        </svg>`
    }
}


module.exports = Triangle;