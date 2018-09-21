#! /usr/bin/env node
import program from 'commander';
import { version, description } from '../../package.json';
import genDiff from '..';

program
  .arguments('<firstConfig> <secondConfig>')
  .description(description)
  .version(version)
  .option('-f, --format [type]', 'output format', 'tree')
  .action((path1, path2, { format }) => {
    const diff = genDiff(path1, path2, format);

    console.log(diff);
  });


program.parse(process.argv);
