#! /usr/bin/env node
import program from 'commander';
// var program = require('commander');

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .action((config1, config2, { format }) => console.log(config1, config2, format));


program.parse(process.argv);
