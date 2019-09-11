#!/usr/bin/node
console.log('hello world!');
const Radio = require('./03-radio.js');

const station = {
  frep:'101.1',
  name:'music'

};

var radio = new Radio(station);

radio.on('play',(station)=>{
  console.log('%s fm %s open',station.name,station.freq);
})

radio.on('play',(station)=>{
  console.log('%s fm %s closed',station.name,station.frep);
});
