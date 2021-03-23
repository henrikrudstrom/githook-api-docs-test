#!/usr/bin/env ts-node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import dereferencedSpecs from './dereferenced-specs';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(hideBin(process.argv))
  .command(
    '$0 <inputPath> <outputPath> <tmpPath>',
    'generate assets',
    (args) => {
      return args
        .positional('inputPath', {
          describe: 'input spec folder',
          type: 'string',
          demandOption: true,
        })
        .positional('outputPath', {
          describe: 'output folder',
          type: 'string',
          demandOption: true,
        });
    },
    (argv) => {
      dereferencedSpecs(argv.inputPath!, argv.outputPath!);
    }
  )
  .help().argv;
