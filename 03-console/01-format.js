#!/usr/bin/node

const log = console.log;

var wd = {
  'name':'lee',
  'qq':'123',
  'age':18
};

log("name:%s",wd.name);
log("Age:%d",wd.age);
log("json:%j",wd);

log('name:',wd.name);
log(`age is ${wd.age}`);
