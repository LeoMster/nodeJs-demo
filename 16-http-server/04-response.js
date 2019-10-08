#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url}`);

  console.log(req.headers);

  cosole.log();
  
  req.pipe(process,stdout);
  
  var html = ;

  if(req.url === '/'){
    //200
    res.writeHead(200,{'Content-Type':'text/html','Content-length:',Buffer.byteLength(html,'utf8')})
    res.end(html);
  }else{
    // 404
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('error');
  }
  res.end('hello world!');
}).listen(8080);
