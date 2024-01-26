const Square = require("../lib/Square")
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Logo = require("../lib/Logo")


describe("Triangle", () => {
    describe("Instantiation", () => {
        it("should instantiate correctly", () => {
            const triangle = new Triangle("triangle", "blue", "black", "abc");
            expect(triangle).toBeInstanceOf(Triangle);
        })
    })
    describe("render method", () => {
        it("should create the string correctly", () => {
            const triangle = new Triangle("triangle", "blue", "black", "abc");
            const triangleString = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
          
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">abc</text>
          
    </svg>`
            const triangleStringRender = triangle.render();
            expect(triangleString.replace(/\s+/g, '')).toMatch(triangleStringRender.replace(/\s+/g, ''));
        });
    });
})