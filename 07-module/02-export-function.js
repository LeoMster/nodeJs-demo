 #!/usr/bin/node
function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  function circumrerence(){
    return 2*Math.PI*radius;
  }

  return {
    area: area,
    circumrerence: circumrerence
  }
}

console.dir(module);
module.exports = circle;
