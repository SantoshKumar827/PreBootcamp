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
  
  var N=+userInput[0];
  function Factorial(N)
  {
      if(N==1)
      return 1;
      else
      return N*Factorial(N-1)
  }

  console.log(Factorial(N));

  //end-here
});