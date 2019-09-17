#!/usr/bin/node


//const EventEmitter = require('events').EventEmitter,util = require('util');

function Radio(station){
/*  var _listeners = {
    'play':[fn1,fn2,fn3],
    'sop':[]
  };*/

  var _listeners = {};
  EventEmitter.call(this);

  setTimeout(()=>{
    emit('play',station);
  },0);  

  setTimeout(()=>{
    emit('end',station);
  },500);

    function emit(evt,arg){
        if(typeof(_listeners[evt])==='undefined'){
          _listeners[evt] = [];
       cosole.error(evt);
  process.exit(1);
    
}}
  
_listeners[evt].forEach(fn)=>{
  fn.call(this,arg);
};


}
//util.inherits(Radio,EventEmitter);

module.exports = Radio;




