#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url}`);

  console.log(req.headers);

  cosole.log();
  
  req.pipe(process,stdout);
  
  var fl = ;

  req.setEncoding('binary');
  res.on('data',(data)=>{
    f1+= data;
  });
  res.on('end',()={

  });
  res.end('hello world!');
}).listen(8080);

funtion getHtml(){
  var html = fs.readFileSync('todo.html').toString('utf8');

  html.replace('%',item.map(function(item{
    return '<li>'+item+'</li>'
  }).join('\n'));

}
