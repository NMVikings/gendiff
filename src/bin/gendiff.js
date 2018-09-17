#! /usr/bin/env node
import program from 'commander';
import { version, description } from '../../package.json';

program
  .arguments('<firstConfig> <secondConfig>')
  .description(description)
  .version(version)
  .option('-f, --format [type]', 'output format')
  .action((config1, config2, { format }) => console.log(config1, config2, format));


program.parse(process.argv);
