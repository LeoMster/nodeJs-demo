#!/usr/bin/node
  
const fs    = require('fs'),
      file  = process.argv[2] || __filename;
try{
var length = fs.statSync(file).size,
    buf = new Buffer(length),
    fid = fs.openSync(file,'r');



fs.readSync(fid,buf,0,length,0);

console.log(buf.toString('utf8'));

fs.closeSync(fid);}catch(e){
  console.log(e.message);
  process.exit(1);

}
