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
  var y=+userInput[0];
var ans=(y%4===0)?((y%100===0)?((y%400===0)?'Y':'N'):'Y'):'N';
  console.log(ans);

  //end-here
});