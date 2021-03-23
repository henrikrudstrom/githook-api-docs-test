const generate = require("./generate");

(async () => {
  await generate("./services", "./output");
})();
