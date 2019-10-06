const carmen = require("../dist/index");
const links = require("./compare.json");

const { saveScreenshot, compareScreenshots } = carmen.missions;

const plan = [compareScreenshots("example-comparison", { urls: links })];

(async () => {
  const results = await carmen.run(plan);
})();
