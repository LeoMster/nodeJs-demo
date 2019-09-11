#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Dog(name,enegry){
  var _name,_enegry;
  var that = this;
  
  EventEmitter.call(this);
  _name = name;
  _enengry = enegry;

  var timer = setInterval(()=>{
    if(_enegry > 0){that.emit('bark');_energy--;}
    else{clearInterval(timer)}
  },1000);
  
    
}

this.getName = ()=>_name;
this.getEnergy = ()=>_enegry;

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
