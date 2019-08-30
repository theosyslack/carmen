// # Available Missions
//   - find404s
//   - findLargeMedia
//   - runPerformanceTest
//   - takeScreenshot

const { missions, helpers } = require('@crescendo-collective/carmen')

async function customMission (page) {
  const writeReport = helpers.createReportWriter('custom-mission', 'title.json')

  const title = await page.title()

  await writeReport({ date: Date.now(), title })
}

module.exports = {
  destinations: [
    {
      url: 'http://google.com',
      missions: ['runPerformanceTest', missions.takeScreenshot, customMission]
    }
  ]
}
