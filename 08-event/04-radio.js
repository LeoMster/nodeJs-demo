#!/usr/bin/node


const EventEmitter = require('events').EventEmitter;

function Radio(station){
  //EventEmitter.call(this);

  var _self =this;

  for(var m in EventEmitter.prototype){
    this[m] = EventEmitter.prototype[m];
  }

  setTimeout(()=>{
    _self.emit('play',station);
  },0);
  setTimeout(()=>{
    _self.emit('stop',station)
  },5000);
}

module.exports = Radio;




