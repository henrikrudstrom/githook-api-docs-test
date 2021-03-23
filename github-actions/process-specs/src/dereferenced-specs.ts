import { dereference } from '@apidevtools/swagger-parser';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import fg from 'fast-glob';
import pmap from 'p-map';

export default async (inputPath: string, outputPath: string) => {
  const specPaths = await fg(
    `${inputPath.replace(/\/$/, '')}/**/*.openapi.yaml`
  );
  if (!existsSync(outputPath)) {
    mkdirSync(outputPath, { recursive: true });
  }
  await pmap(specPaths, async (path) => {
    console.log(`processing spec ${path}`);

    const spec = await dereference(path);
    const specName = spec?.info?.title;
    const specPath = `${outputPath}/${specName.toLowerCase()}.json`;
    const specStr = JSON.stringify(spec);
    writeFileSync(specPath, specStr);
  });
};
