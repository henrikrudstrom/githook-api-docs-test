import * as core from '@actions/core';
import * as github from '@actions/github';
import markdownDocs from './markdown-docs'

(async () => {
  try {
    const specPath = core.getInput('input-path');
    const outputPath = core.getInput('output-path');
    const tmpPath = core.getInput('tmp-path');
    await markdownDocs(specPath, outputPath);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
