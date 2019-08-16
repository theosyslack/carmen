import { read, exists, writeToNewFile } from "../actions/file";
import log from "../actions/log";
import * as path from "path";

const defaultTravelPlan = `
// # Available Missions
//   - find404s
//   - findLargeMedia
//   - getPageSize
//   - takeScreenshot

module.exports = {
  destinations: [
    {
      url: 'http://google.com',
      missions: ['getPageSize', 'takeScreenshot']
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
