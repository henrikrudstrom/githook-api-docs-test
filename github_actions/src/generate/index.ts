import dereferenced from './dereferenced-specs';
import markdownDocs from './markdown-docs';

export default async (
  inputPath: string,
  outputPath: string,
  tmpPath: string
) => {
  await dereferenced(inputPath, `${outputPath}/specs`);
  await markdownDocs(inputPath, `${tmpPath}/source/api`);
};
