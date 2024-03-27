#! /usr/bin/env node
// importing inquirer library here to use prompt functionality in our project!
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter First Number :", type: "number", name: "firstNumber" },
    { message: "Enter Second Number :", type: "number", name: "secondNumber" },
    {
        message: "Operation to perform ? : ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"],
    },
]);
// Checking Conditions
switch (answers.operator) {
    case "Addition": {
        console.log(`Value is : ${answers.firstNumber + answers.secondNumber}`);
        break;
    }
    case "Subtraction": {
        console.log(`Value is : ${answers.firstNumber - answers.secondNumber}`);
        break;
    }
    case "Multiplication": {
        console.log(`Value is : ${answers.firstNumber * answers.secondNumber}`);
        break;
    }
    case "Division": {
        console.log(`Value is : ${(answers.firstNumber / answers.secondNumber).toFixed(3)}`);
        break;
    }
    case "Power": {
        console.log(`Value is : ${Math.pow(answers.firstNumber, answers.secondNumber)}`);
        break;
    }
    default: {
        console.log("invalid operation");
        break;
    }
}
