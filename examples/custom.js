const carmen = require("../dist/index");

const CustomMission = {
  name: "Custom Mission",
  path: "what/",
  url: "http://example.com",
  mission: async ({ report, browser, page }) => {
    return { message: "hi" };
  }
};

(async () => {
  carmen.events.on("mission-started", async config => {
    console.log(config);
  });

  const result = await carmen.run([CustomMission]);
})();
