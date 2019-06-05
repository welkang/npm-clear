#!/usr/bin/env node
const program = require('commander');
const clear = require('./clear');
const path = require('path');
program
  .version('0.0.1')
  .parse(process.argv);

if (program.args && program.args[0]) {
  clear.clearNodeModules(path.resolve(program.args[0]));
} else {
  console.log('请指定目录');
}