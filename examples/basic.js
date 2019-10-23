const carmen = require("../dist/index");

const { BasicMission } = carmen.missions;

(async () => {
  await new Promise(res => setTimeout(res, 2000));
  const result = await carmen.run(
    [
      BasicMission({ url: "https://github.com/" }),
      BasicMission({ url: "https://github.com/" }),
      BasicMission({ url: "https://github.com/" }),
      BasicMission({ url: "https://github.com/" }),
      BasicMission({ url: "https://github.com/" })
    ],
    { launchOptions: { headless: false } }
  );
})();
