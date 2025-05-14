const crypto = require("node:crypto");

console.log("hello world");

var a = 99983;
var b = 8884;

crypto.pbkdf2Sync("passwod","salt",50000000,50,"sha512");
console.log("second key");


crypto.pbkdf2("password","salt",5000000,50 ,"sha512",(err,key) => {
console.log("first key is genereated");
})


function multiplication(x,y){
  const result = a*b;
  return result;


}

const c = multiplication(a,b);
console.log(c);
