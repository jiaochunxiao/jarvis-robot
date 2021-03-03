const fs = require('fs');
const nodePath = require('path');
const chalk = require('chalk');

const SYMBOLS = {
  BRANCH: '├── ',
  EMPTY: '',
  INDENT: '    ',
  LAST_BRANCH: '└── ',
  VERTICAL: '│   ',
};

const TREE_NODES = [];

const OPTIONS = {
  all: false,
  color: false,
  layer: Number.POSITIVE_INFINITY,
  exclude: [],
};

const EXCLUDED_PATTERNS = /\.DS_Store/;

// let COUNT_FILE = 0;
// let COUNT_FOLDER = -1;

function openFile(fileName, path, currentDepth, precedingSymbols, options, isLast) {
  const { color, layer, exclude } = options;
  const isDir = fs.lstatSync(path).isDirectory();
  const isFile = !isDir;

  // COUNT_FILE += isFile ? 1 : 0;
  // COUNT_FOLDER += isDir ? 1 : 0;

  const line = [precedingSymbols];

  if (currentDepth > layer) {
    return;
  }

  // 剔除忽略展示文件
  if (EXCLUDED_PATTERNS.test(path)) {
    return;
  }

  if (currentDepth >= 1) {
    line.push(isLast ? SYMBOLS.LAST_BRANCH : SYMBOLS.BRANCH);
    // line.push(color ? isDir ? chalk.blue(fileName) : fileName : fileName);
    line.push(color && isDir ? chalk.blue(fileName) : fileName);
  } else {
    line.push('.');
  }

  TREE_NODES.push(line.join(''));

  if (isFile) {
    return;
  }
  // 读取当前目录下的内容
  let contents = fs.readdirSync(path);

  if (!options.all) {
    contents = contents.filter((content) => !(content[0] === '.'));
  }

  for (let j = 0; j < exclude.length; j += 1) {
    if (new RegExp(exclude[j]).test(path)) {
      return;
    }
  }

  contents.map((content, index) => {
    const isCurrentLast = index === contents.length - 1;
    let nextPrecedingSymbols = precedingSymbols;
    if (currentDepth) {
      nextPrecedingSymbols += isLast ? SYMBOLS.INDENT : SYMBOLS.VERTICAL;
    } else {
      nextPrecedingSymbols += SYMBOLS.EMPTY;
    }
    openFile(
      content,
      nodePath.join(path, content),
      currentDepth + 1,
      nextPrecedingSymbols,
      options,
      isCurrentLast,
    );
    return content;
  });
}

function print(option) {
  const path = '.';
  const options = Object.assign(OPTIONS, option);
  const currentPath = nodePath.join(process.cwd(), path);
  openFile('command', currentPath, 0, '', options);
  console.log(TREE_NODES.join('\n'));
  // console.log(`${COUNT_FOLDER} directories, ${COUNT_FILE} files`);
}

module.exports = print;
