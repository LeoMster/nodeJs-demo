#!/usr/bin/node
const http =require('http'),
      add ='http://www.sina.com';
var isOk = flase;
do{
  http.get(add,function(res){
    if(res.statusCode<400 && res.status >= 300){
      get(res.headers)
    }
  console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
    
    
  console.log(res.headers);
  console.log('    ');
    
  res.pipe(process.stdout);       
  });
  isOk = true;

}while(!isOk);
