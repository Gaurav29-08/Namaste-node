// const fs = require("fs");
// const a= 1000;
// setImmediate(()=>{
//   console.log("setImmedaite");
  
// });

// fs.readFile("./file.txt","utf-8",()=>{
//   console.log("file Reading CB");
  
// });

// setTimeout(()=>{
//   console.log("timer expired");
  
// },0);

// function printA(){
//   console.log("a=",a);
  
// };

// printA();
// console.log("Aaya kuch smj ke nahi ");


const fs = require("fs");
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 6;

var a = 1000;

setTimeout(()=>{
  console.log("time expired");
  
},0);

setImmediate(()=>{
  console.log("set immediate");
  
})

fs.readFile("./file.txt","utf-8",()=>{
  console.log("file reading compplete");
  
});

function printA(){
  console.log("a=",a);
  
};

printA();
console.log("hello Gaurav");

crypto.pbkdf2("password","salt",5000000,50,"sha512",(key,err)=>{
  console.log("1-crypto done");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(key,err)=>{
  console.log("2-crypto done");
});
crypto.pbkdf2("password","salt",5000000,50,"sha512",(key,err)=>{
  console.log("3-crypto done");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(key,err)=>{
  console.log("4-crypto done");
});
crypto.pbkdf2("password","salt",5000000,50,"sha512",(key,err)=>{
  console.log("5-crypto done");
});
