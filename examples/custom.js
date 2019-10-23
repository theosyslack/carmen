const carmen = require("../dist/index");
const { once } = require("events");
const { BasicMission } = carmen.missions;
const CustomMission = {
  name: "Custom Mission",
  path: "what/",
  url: "http://example.com",
  mission: async ({ report, browser, page, events }) => {
    process.nextTick(() => {
      events.emit("custom-mission-started", page);
    });

    await once(events, "beep-boop");
    // console.log(emitter);
    return { message: "hi" };
  }
};

(async () => {
  carmen.events.on("mission-started", async config => {
    console.log(config);

    // await page.screenshot({ path: "screenshot.png" });
    carmen.events.emit("beep-boop");
  });

  const result = await carmen.run([CustomMission]);
})();
