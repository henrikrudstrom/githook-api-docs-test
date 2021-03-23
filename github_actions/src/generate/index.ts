import dereferenced from './dereferenced-specs';
import markdownDocs from './markdown-docs';

export default async (inputPath: string, outputPath: string) => {
  await dereferenced(inputPath, `${outputPath}/specs`);
  await markdownDocs(inputPath, `${outputPath}/source/api`);
};
