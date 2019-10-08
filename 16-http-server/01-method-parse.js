#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(req.method);

  switch(req.method){
    case 'GET':
      select(req.res);
      break;

    case 'POST':
      insert(req,res)
      break;

    case 'PUT':
      updata(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;
    default:
      err(res);
  }
  res.end('hello world!');
}).listen(8080);

function select(req,res){
  res.end(req.method);
}
function insert(req,res){

}
function updata(req,res){

}
function remove(req,res){

}
function err(res){
  res.end('error!');
}
