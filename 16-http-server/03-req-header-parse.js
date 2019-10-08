#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  
  console.log(req.headers);

  console.log(req.headers.authorization);

  var auth = req.headers.authorization;

  if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0] === 'Basic'){
      var buf =new Buffer(auth[1],'base64');

      console.log(buf.toString('utf8'));
    }
  }
  res.end('OK!');
}).listen(8080);
