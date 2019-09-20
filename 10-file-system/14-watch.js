#!/usr/bin/node
  
const fs    = require('fs'),
      dst = process.argv[2];


fs.watch(dst,function(dst){
  console.log(evt,file);
});
