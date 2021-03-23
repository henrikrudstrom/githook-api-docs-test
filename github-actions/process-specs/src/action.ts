import { dereference } from '@apidevtools/swagger-parser';
import * as core from '@actions/core';
import * as github from '@actions/github';
import dereferencedSpecs from './dereferenced-specs';

(async () => {
  try {
    const specPath = core.getInput('spec-path');
    const outputPath = core.getInput('output-path');
    await dereferencedSpecs(specPath, outputPath);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
