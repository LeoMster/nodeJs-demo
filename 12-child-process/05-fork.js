#!/usr/bin/node

const cp = require('child_process');

var child = cp.fork('cat','04-fork.js');

global.setTimeout(function(){
 console.log('bye');
 process.exit(1);
},16000);
child.stdout.pipe(process.stdout);
//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);
