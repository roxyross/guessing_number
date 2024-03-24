#! /usr/bin/env node
import inquirer from "inquirer";
let numberGenerator = Math.round(Math.random() * 6);
let UserInput = await inquirer.prompt([{
        name: "userNumber",
        type: "number",
        message: "Please Enter A Number Between 1-6"
    },]);
if (UserInput.userNumber === numberGenerator) {
    console.log(`Congratulations Your Number Is ${UserInput} =`, numberGenerator);
}
else {
    console.log('Sorry! Do You Want To Try Again');
}
