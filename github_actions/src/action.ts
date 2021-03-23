import core from '@actions/core';
import github from '@actions/github';
import generate from './generate';

(async () => {
  try {
    // `who-to-greet` input defined in action metadata file
    const specPath = core.getInput('spec-path');
    const outputPath = core.getInput('output-path');
    await generate(specPath, outputPath);
  } catch (error) {
    console.log(error);
    // core.setFailed(error.message);
  }
})();
