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
  
  var Inputs=userInput[0].split(" ");
  var p=+Inputs[0],r=+Inputs[1],t=+Inputs[2];

  console.log(((p*t*r)/100).toFixed(2));

  //end-here
});