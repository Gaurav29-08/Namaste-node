const fs = require("fs");
const a = 888;
setImmediate(()=>{
  console.log("set Immediate");
  
});

Promise.resolve(()=>{
  console.log("promise resolve");
  
});

fs.readFile("./file.txt","utf-8",()=>{
  console.log("file reading");
  
});

setTimeout(()=>{
  console.log("time expired");
  
},0);

process.nextTick(()=>{
  console.log("process nexttick");
  
});

function printA(){
  console.log("a=",a);
  
}

printA();
console.log("maja to aa raha hai an abhai");
