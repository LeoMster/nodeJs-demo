#!/usr/bin/node

const write = require('stream').Writable;

function Green(){
  wrie.call(this);

}

Green.prototype = write.prototype;

Green.prototype._write = function(chunk,encoding,callback){
  process.stdout.write('\033[1;32m' + 'hello world!' + '\033[1;37m');
  callback();
};

module.exports = Green;
