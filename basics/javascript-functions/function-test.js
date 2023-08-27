/*
  * prints even numbers up to 
  * the number specified by the 
  * user. This does not include 
  * the number 0.
*/
function firstXevenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0 && i != 0) {
      console.log(i)
    }
  }
}

// Use of the built in readline function.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (input){
  firstXevenNumbers(input);
rl.close();
})

