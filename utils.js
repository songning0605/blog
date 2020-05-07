const fs = require('fs')
const path = require('path')

const rootPath = path.join(__dirname, './docs')

function checkFileType(filePath) {
  return filePath.includes(".md")
}

function readDirSync(filePath, result, curPath) {
  // fs.readdirSync(filePath, function (err, files) {

  var dirs = fs.readdirSync(filePath).filter(el => el !== '.vuepress');
  dirs.forEach(el => {
    var info = fs.statSync(filePath + "/" + el);

    if (info.isDirectory()) {
      result[curPath] = ['']
      readDirSync(filePath + "/" + el, result, `/${el}/`)
    } else {
      if (checkFileType(el) && el !== "README.md") {
        result[curPath] = result[curPath] || ['']
        result[curPath].push(`${curPath}${el}`
          .replace('.md', '')
        )
      }
    }
  })
}

function addGroupTitle(result) {
  var formatRes = {};
  Object.keys(result).forEach(basePath => {
    if (basePath !== '/') {
      formatRes[basePath] = [{
        title: '分组' + basePath,
        collapsable: false,
        sidebarDepth: 3,
        children: result[basePath]
      }];
    } else {
      formatRes[basePath] = result[basePath]
    }
  })

  return formatRes;
}

function getChildren(docDir = rootPath) {
  var result = {}
  readDirSync(docDir, result, '/')

  result = addGroupTitle(result)

  delete result['/'];

  return result;
}



// var res = getChildren(rootPath);

// console.log('res', JSON.stringify(res));


module.exports = {
  getChildren: getChildren
}