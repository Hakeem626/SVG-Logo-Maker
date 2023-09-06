const { writeFile } = require('fs/promises');
const inquirer= require('inquirer');
const {Circle, Triangle, Square} = require("./shapes.js")

    function CLI () {
        inquirer.prompt([
            {
                type: "list",
                name: "shapeType",
                message: "select a shape",
                choices: ["circle", "triangle", "square"]
            },
            {
                type: "input",
                name: "shapeColor"
                message: "What color is the shape?"
            },
            {
                type: "input",
                name: "text"
                message: "What is the text (must be no more than 3 characters)"
            },
            {
                type: "input",
                name: "textColor"
                message: "What color is the text?"
            },
        ]).then((response) => {
            console.log(response.shapeType);
        })
    }


    module.exports = CLI