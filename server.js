const http = require("node:http");

const server = http.createServer(function(req,res){
  if(req.url==="/getSecretData"){
    res.end("There is no secert data")
  }
  res.end("hello World")
});

server.listen(7777);