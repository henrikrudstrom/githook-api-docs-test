const converter = require("widdershins");
const yaml = require("yaml");
const { readdir, writeFile, readFile } = require("fs/promises");
const { existsSync } = require("fs");

const options = {
  codeSamples: true,
  httpSnippet: true,
  theme: "darkula",
  search: true,
  sample: true,
  shallowSchemas: false,
  tocSummary: false,
  headings: 2,
  language_tabs: [{ shell: "curl" }, { http: "HTTP" }],
  resolve: true,
};

const convert = async (input, output) => {
  const apiStr = await readFile(input, "utf8");
  const apiObj = (api = yaml.parse(apiStr));

  try {
    const str = await converter.convert(apiObj, { ...options, source: input });
    await writeFile(output, str);
  } catch (err) {
    console.error(err);
  }
};

module.exports = async (specRoot, outputPath) => {
  //   const specPath = "../../specifications/services";
  console.log("hello");
  const specDirs = await readdir(specRoot);
  await Promise.all(
    specDirs.map(async (subdirName) => {
      console.log(subdirName);
      const specPath = `${specRoot}/${subdirName}/${subdirName}.openapi.yaml`;
      if (!(await existsSync(specPath))) {
        return null;
      }
      await convert(
        specPath,
        `${outputPath}/source/apis/${subdirName}.html.md`
      );
    })
  );
};
