#!/usr/bin/node
console.log('hello world!');
const Radio = require('./04-radio.js');

const station = {
  frep:'101.1',
  name:'music'

};

var radio = new Radio(station);

radio.on('play',(station)=>{
  console.log('%s fm %s open',station.name,station.frep);
})

radio.on('play',(station)=>{
  console.log('%s fm %s closed',station.name,station.frep);
});
