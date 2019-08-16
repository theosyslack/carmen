import { read, exists, writeToNewFile } from "../actions/file";
import log from "../actions/log";
import * as path from "path";

const defaultTravelPlan = `// # Available Missions
//   - find404s
//   - findLargeMedia
//   - getPageSize
//   - takeScreenshot

const { missions, helpers } = require('carmen')

async function customMission (page) {
  const writeReport = helpers.createReportWriter('custom-mission', \`title.json\`)

  const title = await page.title()

  await writeReport({ date: Date.now(), title })
}

module.exports = {
  destinations: [
    {
      url: 'http://google.com',
      missions: ['getPageSize', missions.takeScreenshot, customMission]
    }
  ]
}

`;

const createDefaultTravelPlan = async () => {
  if (await exists("./travel-plan.js")) {
    log("travel-plan.js already exists, I won't overwrite.", "pending");
  } else {
    await writeToNewFile("travel-plan.js", defaultTravelPlan);
    log("Created travel-plan.js", "success");
  }
};

export default createDefaultTravelPlan;
