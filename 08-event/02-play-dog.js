#!/usr/bin/node
const Dog = require('./02-dog.js');

var taidi = new Dog('taidi',4);

var zangao = new Dog('zangao',9);


taidi.on('bark',function(){
  console.log("name:%s,enegry:%d",this.getName(),this.getEnegry);
});

zangao.on('bark',function(){
  console.log()
});
