const carmen = require("../dist/index");
const links = require("./screenshot.json");

const { BasicMission } = carmen.missions;

(async () => {
  const result = await carmen.run([
    BasicMission({ url: "https://github.com/" })
  ]);
})();
