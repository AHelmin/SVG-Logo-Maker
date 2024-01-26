const Square = require("../lib/Square")
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Logo = require("../lib/Logo")


describe("Logo", () => {
    describe("Instantiation", () => {
      it("should instantiate correctly", () => {
        const logo = new Logo("circle","blue","black","abc");
        expect(logo).toBeInstanceOf(Logo);
      })
    })})