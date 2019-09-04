#!/usr/bin/node

function task(){
  var num = 0;

  for(var i = 0;i < 1000;i++){
    for(var j = 0;j < 1000;j++){
      num +=i*j;
    }
  }
  return num;
}
console.time('DOWNLOAD_FILE');
var n = task();
console.timeEnd('DOWNLOAD_FILE');

console.log("n = %d",n);

