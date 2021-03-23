import converter from 'widdershins';

import yaml from 'yaml';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import fg from 'fast-glob';
import pmap from 'p-map';

const options = {
  codeSamples: true,
  httpSnippet: true,
  theme: 'darkula',
  search: true,
  sample: true,
  shallowSchemas: false,
  tocSummary: false,
  headings: 2,
  language_tabs: [{ shell: 'curl' }, { http: 'HTTP' }],
  resolve: true,
};

const convert = async (inputFile, outputFolder) => {
  const specStr = readFileSync(inputFile, 'utf8');
  const spec = yaml.parse(specStr);

  try {
    const str = await converter.convert(spec, {
      ...options,
      source: inputFile,
    });
    if (!spec || !spec.info || !spec.info.title) {
      console.log(`${inputFile} is not a valid spec`);
    }
    const specName = spec.info.title.toLowerCase();
    const outputFile = `${outputFolder}/${specName}.html.md`;
    writeFileSync(outputFile, str);
  } catch (err) {
    console.error(err);
  }
};

export default async (inputPath: string, outputPath: string) => {
  const specPaths = await fg(`${inputPath}/**/*.openapi.yaml`);
  console.log(`${inputPath}/**/*.openapi.{yaml}`);
  console.log(specPaths);

  if (!existsSync(outputPath)) {
    mkdirSync(outputPath, { recursive: true });
  }
  await pmap(specPaths, async (specPath) => convert(specPath, outputPath));
};
