// # Available Missions
//   - find404s
//   - findLargeMedia
//   - getPageSize
//   - takeScreenshot

const { missions, helpers } = require("../dist/index.js");

async function customMission(page) {
  const writeReport = helpers.createReportWriter(
    "custom-mission",
    "title.json"
  );

  const title = await page.title();

  await writeReport({ date: Date.now(), title });
}

module.exports = {
  destinations: [
    {
      url: "http://google.com",
      missions: ["getPageSize"]
    }
  ]
};
