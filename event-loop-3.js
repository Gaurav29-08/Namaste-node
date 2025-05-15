const fs = require("fs");

setImmediate(()=>{
  console.log("Set immediate");
  
});

setTimeout(()=>{
  console.log("timer expired");
  
},0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
  console.log("file reading CB");
  
});

process.nextTick(()=>{
  setTimeout(()=>{
    console.log("aaya naja");
    
  },0)
  process.nextTick(()=>{
    console.log("inner nexttick");
    console.log("Next Tick");
    
  });
})

console.log("bhot tuff hai ");
