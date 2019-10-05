const carmen = require("../dist/index");

const { saveScreenshot } = carmen.missions;

(async () => {
  await carmen.run([saveScreenshot("http://google.com", "./google.png")]);
})();
