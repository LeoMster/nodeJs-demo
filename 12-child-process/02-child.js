#!/usr/bin/node

cosole.log(process.pid);

global.setInterval(function(){
  console.log(Data.now());
},2000);
global.setTimeout(function(){
  console.log('bye');
  process.exit(1);
},10000);


