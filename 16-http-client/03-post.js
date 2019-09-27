#!/usr/bin/node
const http =require('http'),
      address ='http://localhost:8080/',
      url = require('url');

  var option = url.parse(addr);
  option.method = 'POST'

  http.request(option,function(res){
    console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
    
    
    console.log(res.headers);
    console.log('    ');
    
    res.pipe(process.stdout);       
  })


