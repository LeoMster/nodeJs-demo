#!/usr/bin/node
const http =require('http'),
       http.createServer(function(req,res){
    console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
    
    
    console.log(res.headers);
    console.log('    ');
    
    req.pipe(process.stdout);
    res.end('xxxx');
   
  }).listen(8080);


