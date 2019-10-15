const carmen = require("../dist/index");

const { BasicMission } = carmen.missions;

(async () => {
  const result = await carmen.run([
    BasicMission({ url: "https://github.com/" })
  ]);
})();
