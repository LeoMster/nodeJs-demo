#!/usr/bin/node

console.chalk = require('chalk'),
          log = console.log;

log(chalk.red('red'));
log(chalk.green('green'));

log(chalk.red('red')+chalk.green('green'));

