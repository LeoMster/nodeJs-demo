#!/usr/bin/node

const http = require('http'),
      fs    = require('fs');


http.createServer((req,res)=>{()
  if(req.url === './favicon.ico') return;

  var filename = __dirname + req.url;
  cosnole.log(filename);
  fs.createReadStream(filename).pipe(res);
}).listen(8080);
