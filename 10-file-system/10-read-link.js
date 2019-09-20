#!/usr/bin/node
  
const fs    = require('fs'),
      lnk = process.argv[2];  

cosnole.log('%s->%s',lnk,fs.readlinkSync());




