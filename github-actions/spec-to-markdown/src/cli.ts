#!/usr/bin/env ts-node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import markdownDocs from './markdown-docs';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(hideBin(process.argv))
  .command(
    '$0 <inputPath> <outputPath>',
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
      markdownDocs(argv.inputPath!, argv.outputPath!);
    }
  )
  .help().argv;
