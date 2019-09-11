#!/usr/bin/node


const EventEmitter = require('events').EventEmitter,util = require('util');

function Radio(){
  EventEmitter.call(this);

  var _self =this;
  setTimeout(()=>{
    _self.emit('play');
  },0);
  setTimeout(()=>{
    _self.emit('stop')
  },500);
}

util.inherits(Radio,EventEmitter);

module.exports = Radio;




