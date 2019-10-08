
const http = require('https'),
      cheerio = require('cheerio'),
      log = console.log,
      print = require('util').debug('crawler'),
      addr = 'https://segmentfault.com/lives/free';

http.get(addr,function(res)){
        var result = '';
        res,on('data',function(data){
          result += data;
        });

        res.on('end',function(){
          log(result);

          var $ = cheerio.load(result);
          $('body').find('.card-body').each(function(){
            print($this).html());

            var cName =$(this).find('.card-title>a').text();
            var cURL = $(this).find('./card-title>a').attr('href');
            cURL = 'https://' + cURL;

            if(cName=='') return;

            log(cName);
            log(cURL);
          });
        });
}
