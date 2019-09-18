#!/usr/bin/node
  
const fs    = require('fs'),
      file  = process.argv[2] || __filename;

if(fs.existsSync(file)){
  cosnole.log(fs.readFileSync(file).toString('utf8'));
}else{


console.error('no file');
process.exit(1);
}
