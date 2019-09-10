#!/usr/bin/node
console.log('hello world!');

  function area(radius){
    return Math.PI*radius*radius;
  }
  function zhouchang(radius){
    return 2*Math.PI*radius;
  }
  function zhijing(radius){
    return 2*radius;
  }


module.exports.area = area;
module.exports.zhouchang = zhouchang;
