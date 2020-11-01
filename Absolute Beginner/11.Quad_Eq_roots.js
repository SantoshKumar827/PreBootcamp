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
  var In=userInput[0].split(" ");
  var a=+In[0], b=+In[1], c=+In[2];
  var det=Math.sqrt((b*b)-(4*a*c));

  console.log(((-b+det)/(2*a)).toFixed(2)+'\n'+((-b-det)/(2*a)).toFixed(2));

  //end-here
});