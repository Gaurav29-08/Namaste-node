const fs = require("fs");
setImmediate(()=>{
  console.log("setImmediate");
});

setTimeout(()=>{
  console.log("Timer expired");
  
},0);

fs.readFile("./file.txt","utf-8",()=>{
  setTimeout(()=>{
    console.log("2nd timer");
    
  });
  process.nextTick(()=>{
    console.log("2nd nextTick");
    
  });

  setImmediate(()=>{
    console.log("2nd setimmediate");
    console.log("file reading");
    
    
  })
});

process.nextTick(()=>{
  console.log("nextTick");
  
});

console.log("last run code");
