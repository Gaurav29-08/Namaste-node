const fs = require("fs");
const crypto = require("crypto");

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
  console.log("1-crypto done");
});