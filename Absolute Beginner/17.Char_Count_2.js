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
var A=userInput[0].split(' ');

var sum=0
for(var i=0;i<A.length;i++)
{
    sum+=A[i].length;
}
  console.log(sum);

  //end-here
});