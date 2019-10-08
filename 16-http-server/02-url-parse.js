#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring');

http.createServer((req,res)=>{
  console.log(req.url);

  //var addr = url.parse(req.url);
  var addr = url.parse('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
  
  console.log(addr.protocol);
  console.log(addr.auth);
  console.log('pathname:',addr.pathname);
  console.log('path parse',addr.pathname.split('/'));
  console.log('qurey:',addr.query);
  console.log(qs.parse(addr.query));
  res.end('KKKKKKKKKK!');
}).listen(8080);
