// # Available Missions
//   - find404s
//   - findLargeMedia
//   - getPageSize
//   - takeScreenshot

const carmen = require("../dist/index.js");

async function customMission(page) {
  const now = Date.now();
  const writeReport = helpers.createReportWriter(
    "custom-mission",
    `${now}.json`
  );

  const title = await page.title();
  const performance = await missions.runPerformanceTest(page);

  await writeReport({
    date: now,
    title,
    performance
  });
}

const destinations = [
  {
    url: "http://google.com",
    missions: [createMission]
  }
];
