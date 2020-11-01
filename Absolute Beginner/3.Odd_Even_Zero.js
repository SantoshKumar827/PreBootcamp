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
var N=(+userInput[0]).toFixed(0);

  console.log((N===0)?'Zero':((N%2===0)?'Even':'Odd'));

  //end-here
});