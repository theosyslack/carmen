const carmen = require("../dist/index");

const { saveScreenshot, compareScreenshots } = carmen.missions;

const plan = [
  compareScreenshots({
    urls: [
      "https://github.com/theosyslack/carmen",
      "https://github.com/GoogleChrome/puppeteer"
    ]
  })
];

(async () => {
  const results = await carmen.run(plan);
})();
