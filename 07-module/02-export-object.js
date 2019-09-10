#!/usr/bin/node
console.log('hello world!');

var circle = {
  'area':function(radius){
    return Math.PI*radius*radius;
  },
  'zhouchang':function(radius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
  }
}

module.exports = circle;
