#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1234;
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<=================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<==========>>>  ${chalk.bold.blueBright(`MY ATM WITH CHALK FUNCTION`)}         <<<========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<====================================>>>`));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.hex('#99CCFF')("Enter Your Pin Number:"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.hex('#99CCFF')("please select option"),
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.hex('#99CCFF')("enter Your Amount"),
                type: "number"
            }
        ]);
        if (myBalance <= amountAns.amount) {
            console.log(chalk.redBright.bold(`You have Insufficant Balance !`));
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`Your Current Balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current Balance is : ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "FastCash",
                message: chalk.hex('#99CCFF')("Select Your Withdraw Amount"),
                type: "list",
                choices: ["200", "500", "1000", "5000", "10000", "20000"]
            }
        ]);
        if (myBalance <= fastCash.FastCash) {
            console.log(chalk.redBright.bold(`You have Insufficant Balance !`));
        }
        else if (myBalance -= fastCash.FastCash) {
            console.log(`Your Current Balance is : ${myBalance}`);
        }
    }
}
else {
    console.log(chalk.redBright.bold("Your Pin is Incorrect Please try to Push a correct Pin Number!"));
}
