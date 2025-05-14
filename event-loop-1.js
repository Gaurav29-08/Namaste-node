const fs = require("fs");
const a= 1000;
setImmediate(()=>{
  console.log("setImmedaite");
  
});

fs.readFile("./file.txt","utf-8",()=>{
  console.log("file Reading CB");
  
});

setTimeout(()=>{
  console.log("timer expired");
  
},0);

function printA(){
  console.log("a=",a);
  
};

printA();
console.log("Aaya kuch smj ke nahi ");
