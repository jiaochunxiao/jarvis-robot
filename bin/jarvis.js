#!/usr/bin/env node

const program = require('commander');

const system = require('../command/info');

program
  .version('0.0.1')
  .usage('<command> [options]')
  .option('-i, --info', 'output some info of the tools');

program
  .command('system')
  .alias('s')
  .description('show some infomation for current command')
  .action(system);

program.parse(process.argv);

if (program.info) {
  console.log('Jarvis is an assistant for your work & life !');
}
