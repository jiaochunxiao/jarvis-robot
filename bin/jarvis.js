#!/usr/bin/env node

const program = require('commander');

const system = require('../command/info');

const tree = require('../command/tree');

program
  .version('0.0.1')
  .usage('<command> [options]')
  .option('-i, --info', 'output some info of the tools');

program
  .command('info')
  .alias('i')
  .description('show some information for your computer!')
  .action(system);

program
  .command('tree')
  .option('-L, --layer [number]', 'the max depth to show', parseInt)
  .option('-a --all [boolean]', 'is show all files')
  .option('-c --color', 'is show colorful foldername')
  .option('-I --exclude [string]', 'ignore folder or files', (string) => string.split(','))
  .alias('t')
  .description('show folders && files in current folder!')
  .action(tree);

program.parse(process.argv);

if (program.info) {
  console.log('Jarvis is an assistant for your work & life !');
}
