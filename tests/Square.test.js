const Square = require("../lib/Square")
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Logo = require("../lib/Logo")


describe("Square", () => {
    describe("Instantiation", () => {
      it("should instantiate correctly", () => {
        const square = new Square("square","blue","black","abc");
        expect(square).toBeInstanceOf(Square);
      })
    })
    describe("render method", () => {
        it("should create the string correctly", () => {
            const square = new Square("square", "blue", "black", "abc");
            const squareString = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="90" y="40" width="120" height="120" fill="blue" />
                  
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>
                  
            </svg>`
            const squareStringRender = square.render();
            expect(squareString.replace(/\s+/g, '')).toMatch(squareStringRender.replace(/\s+/g, ''));
        });
    });
})