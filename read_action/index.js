const core = require("@actions/core");
const github = require("@actions/github");
const { readFileSync } = require("fs");

try {
  const file = readFileSync("output/test.txt", `hello ${nameToGreet}`);
  console.log(`file contents: ${file}`);
} catch (error) {
  core.setFailed(error.message);
}
