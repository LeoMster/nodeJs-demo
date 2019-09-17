#!/usr/bin/node

const Green = require('./04-green-stream.js'),
      stdin = process.stdin;

var g  = new Green();

stdin.resume();
stdin.pipe(g);

