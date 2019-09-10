#!/usr/bin/node

/*const p = require("./02-export-function.js");

console.dir(module);
console.log(p);*/

/*console.circle = requie('./02-export-function.js');

console.log('r = 10,circle area:%d',circle(10).area());*/

//console.log(circle(10).cir);

/*const circle = require("./02-export-object.js");

console.log('直径：',circle.area(10));
console.log("面积:");

circle.area*/

var area = require('./02-export-object-v2.js');
console.log('circle area:',area(10));
