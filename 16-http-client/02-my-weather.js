#!/usr/bin/node
const http =require('http'),
    city = process.agrv[2] || '石家庄';
var adress ='http://v.juhe.cn/weather/index?cityname='+city+'&key=70b20823f67b5f0ca3358b796fd83260'
  http.get(global,unicode(adress),function(res){
    console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
    
    
    console.log(res.headers);
    console.log('    ');
    
    res.pipe(process.stdout); 

    var weather;
    res.on('data',function(){
      weather+=data;
    });
    res.end('end',function(){
      weather = JSON.parse(weather);
        console.log(weather.result.tody.temperature);
    });
  })


