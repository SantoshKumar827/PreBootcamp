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
var A=userInput[0];

  function Rev(i)
  {
	  if (i===A.length)
		  return;
	  else
	  {
		  Rev(i+1);
		  console.log(A[i]);
	  }
  }
Rev(0);
  //end-here
});