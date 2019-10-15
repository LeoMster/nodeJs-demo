#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      url = require('url');

var items = [];

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url}`);

  console.log(req.headers);

  cosole.log();
  
  req.pipe(process,stdout);
  
  function getHtml(){
  return ''+
    +'<!DOCTYPE html>'
    + '<html lang="en">'
    +'<head>'
    +'<meta charset="UTF-8">'
    +'<title>Document</title>'
    +'</head>'
    +'<body>'
    +'<h1>TODO list</h1>'
  +'<ul>'
  +items.map(function(it){
    return '<li>'+it+'</li>';
  }).join('\n');
  +'</ul>'
    +'<form method="POST" action="/">'
    +'<input type="text" name="items">'
    +'<input type="submit" value="提交">'
    +'</form>'
    +'</body>'
    +'</html>'
}
  if(req.url === '/' && req.method === 'GET'){
    //200
    res.writeHead(200,{'Content-Type':'text/html','Content-length:',Buffer.byteLength(html,'utf8')})
    res.end(getHtml());
  }else if(req.method === 'POST' && req.url == '/'){
 
    // 404
    var it = qs.parse(url.parse(eq.url).query));

    if(typeof it === undefined){
      items.push(it);
    }



   // res.statusCode = 404;
   
   //es.setHeader('Content-Type','text/plain');
    //res.end('error');
  }else{
    res.end('error');
  }
  res.end('hello world!');
}).listen(8080);
