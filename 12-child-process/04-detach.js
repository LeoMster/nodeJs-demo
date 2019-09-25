#!/usr/bin/node

const cp = require('child_process');

var child = cp.spawn('./02-spawn-v2.js',[],{'detached':true,'stdput':true});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
