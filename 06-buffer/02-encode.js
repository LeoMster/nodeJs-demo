#!/usr/bin/node

const log = console.log,
      user = process.argv[2],
      pwd = process.argv[3];

log('usr:%d','pwd:%d',user,pwd);

var str = user + ':'+pwd;
var buf = new Buffer(str);
log('base64:%s',buf.toString('base64'));

