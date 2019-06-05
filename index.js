#!/usr/bin/env node
const program = require('commander');
const clear = require('./clear');
const path = require('path');
const exec = require('child_process').execSync;
const targetFoler = 'node_modules';

program
  .version('0.0.3')
  .parse(process.argv);

if (program.args && program.args[0]) {
  const listShell = `find ${path.resolve(program.args[0])} -name ${targetFoler}`;
  const listResult = exec(listShell);
  exec(`find ${path.resolve(program.args[0])} -name ${targetFoler} | xargs rm -rf`);
  console.log(`已成功移除以下 ${targetFoler} 文件夹：`);
  console.log(listResult.toString("utf8").trim());
} else {
  console.log('请指定目录');
}