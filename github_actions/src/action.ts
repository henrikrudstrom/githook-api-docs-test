import * as core from '@actions/core';
import * as github from '@actions/github';
import generate from './generate';

(async () => {
  try {
    const specPath = core.getInput('spec-path');
    const outputPath = core.getInput('output-path');
    const tmpPath = core.getInput('tmp-path');
    await generate(specPath, outputPath, tmpPath);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
