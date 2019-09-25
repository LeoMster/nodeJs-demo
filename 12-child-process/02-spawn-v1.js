#!/usr/bin/node

const cp = require('child_process');

cp.spawn('cat',['-n','02-spawn-v1.js']);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
