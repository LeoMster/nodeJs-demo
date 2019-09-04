#!/usr/bin/node

process.on("SIGINT",()=>{
  console.log('your press ctrl+c or kill -2');
  process.exit();
});

process.on('SIGINT',()=>{
  console.log('your press ctrl+Z');
});

process.stdin.resume();
