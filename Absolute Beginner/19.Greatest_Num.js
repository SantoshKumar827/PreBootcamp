// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var A=+userInput[0], B=+userInput[1], C=+userInput[2];

  console.log(A>B?(A>C?A:C):(B>C?B:C));

  //end-here
});