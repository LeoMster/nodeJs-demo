#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url}`);

  console.log(req.headers);

  cosole.log();

  res.end('hello world!');
}).listen(8080);
