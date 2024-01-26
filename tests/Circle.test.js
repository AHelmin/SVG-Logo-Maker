const Square = require("../lib/Square")
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Logo = require("../lib/Logo")


describe("Circle", () => {
    describe("Instantiation", () => {
        it("should instantiate correctly", () => {
            const circle = new Circle("circle", "blue", "black", "abc");
        })
    })

    describe("render method", () => {
        it("should create the string correctly", () => {
            const circle = new Circle("circle", "blue", "black", "abc");
            const circleString = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>
      
      </svg>`
            const circleStringRender = circle.render();
            expect(circleString.replace(/\s+/g, '')).toMatch(circleStringRender.replace(/\s+/g, ''));
        });
    });
});
