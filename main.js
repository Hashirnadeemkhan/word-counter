import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter the sentence which you want to count the words"
});
let words = answer.sentence.trim().split(" ");
console.log(`your sentence words count are ${words.length}`);
