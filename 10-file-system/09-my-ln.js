#!/usr/bin/node
  
const fs    = require('fs'),
      src  = process.argv[2] || __filename,
      dst = process.argv[3];
switch(process.argv.length){
  case 4 : 
      var src = process.argv[2];
      var link = process.argv[3];
      fs.linkSync(src,link);//hard link
    break;
  case 5:
      var opt = process.argv[2];
      
        var src = process.argv[3];
        var link = process.agrv[4];//soft
        if(opt !== '-s'){
        ErrMsg();
        }
        fs.symlinkSync(src,link);
    break;
  default: 
    ErrMsg();//
}
function errMsg(){
  console.log('ERR：错误');
  process.exit(1);
}

//src.pipe(dst);
//src = fs.createReadStream;
//dst = fs.createWriteStream;
//fs.createReadStream(src).pipe(fs.createWriteStream(dst));


