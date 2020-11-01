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
var M=+userInput[0];
var Days=[31,28,31,30,31,30,31,31,30,31,30,31];
  console.log((M<1||M>12)?'Error':Days[M-1]);

  //end-here
});