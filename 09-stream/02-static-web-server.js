#!/usr/bin/node

const http = require('http'),
      fs    = require('fs');


http.createServer((req,res)=>{
  if() return;

  var filename = __dirname + req.url;
  cosnole.log(filename);
  res.end(fs.readFileSync(filename).toString('utf8'));
}).listen(8080);
