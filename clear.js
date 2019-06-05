const fs = require('fs');
const rimraf = require('rimraf');

function deleteTargetFolder(path, target) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach((file, index) => {
      const curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        if (file === target) {
          rimraf(curPath, {}, (result) => {
            console.log('cleared: ' + curPath);
          });
        } else {
          deleteTargetFolder(curPath, target)
        }
      }
    })
  }
}

exports.clearNodeModules = function (parentDir) {
  const targetDir = parentDir || './';
  console.log(`开始递归删除 ${targetDir} 目录下的 node_modules 文件夹...`);
  deleteTargetFolder(targetDir, 'node_modules');
}
