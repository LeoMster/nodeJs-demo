#!/usr/bin/node
const http =require('http'),
      address = process.agrv[2] || 'http://sample.wangding.in/web/one-div.html';

  http.get(add,function(res){
    console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
    
    
    console.log(res.headers);
    console.log('    ');
    
    res.pipe(process.stdout);       
  })


