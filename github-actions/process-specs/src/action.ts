import { dereference } from '@apidevtools/swagger-parser';
import * as core from '@actions/core';
import * as github from '@actions/github';
import dereferencedSpecs from './dereferenced-specs';

(async () => {
  try {
    const inputPath = core.getInput('input-path');
    const outputPath = core.getInput('output-path');
    await dereferencedSpecs(inputPath, outputPath);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
