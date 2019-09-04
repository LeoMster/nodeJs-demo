#!/usr/bin/node

var pid = process.argv[2];
    sign = process.argv[3];
process.kill(pid,sign);

