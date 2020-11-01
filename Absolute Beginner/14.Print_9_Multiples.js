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
if(N===0)
{
    console.log('NULL');
}
else
{
    var opstr=[];
    for(var i=1;i<=N;i++)
    opstr.push(9*i);
    console.log(opstr.join(' '));
}
  

  //end-here
});