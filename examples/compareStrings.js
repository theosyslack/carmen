const carmen = require("../dist/index");

const { compareStrings } = carmen.missions;

const plan = [
  compareStrings({
    urls: ["https://www.jabil.com", "https://us.jabil.crescendo.io"]
  })
];

(async () => {
  const results = await carmen.run(plan);
})();
