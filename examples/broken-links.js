const carmen = require("../dist/index");
const { uniq } = require("ramda");

const { findBrokenLinks } = carmen.missions;

(async () => {
  const result = await carmen.run([
    findBrokenLinks({ url: "http://github.com" })
  ]);
})();
