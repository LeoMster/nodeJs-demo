#!/usr/bin/node

const cp = require('child_process');

cp.execFile('cat',['-n','01-exec-file.js'],function(err,data.error){
  if(err){
    console.error(error);
    process.exit(1);
  }

  console.log(out);
})
