/* 
 * The classic time tested FizzBuzz problem.
 * Number included to show program works as it should.
*/
function fizzbuzz (num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz", i);
    }
    else if (i % 3 == 0) {
      console.log("Fizz", i);
    }
    else if (i % 5 == 0) {
      console.log("Buzz", i);
    }
  }
}

/* 
 * Both const and function can be used to declare a function,
 * however const will only declare it in scope. Fuction 
 * elevates the fuction to work globally, but it needs to come at the beginning.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (input){
  fizzbuzz(input)
  rl.close();
});
