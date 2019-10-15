const carmen = require("../dist/index");

const { saveScreenshot } = carmen.missions;
const result = carmen.run([
  saveScreenshot({ url: "https://github.com/theosyslack/carmen" })
]);
