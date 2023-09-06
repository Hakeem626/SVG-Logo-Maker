const { Circle, Triangle, Square } = require("./shapes.js")

describe("Test Triangle", () => {
    test("color should match input", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
})