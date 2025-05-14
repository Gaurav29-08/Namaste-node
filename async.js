const fs = require("fs");
const https = require("https");

console.log("hello world");

var a = 1098373;
var b = 8839;

https.get("https://dummyjson.com/products/1",(res)=>{
  console.log("fetched data Successfully");
  
});

setTimeout(()=>{
  console.log("set Timout called after 5 seconds");
  
},5000);

fs.readFile("./file.txt","utf-8",(err,data)=>{
  console.log("file Data : ",data);
});

function multiplyFn(x,y){
  const result = a*b;
  return result;
}

var c = multiplyFn(a,b);
console.log(c);
