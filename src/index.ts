// #!/usr/bin/env node
import { Page, Browser } from "puppeteer";
import createDefaultTravelPlan from "./scripts/createDefaultTravelPlan";
import followTravelPlan from "./scripts/followTravelPlan";
import findTravelPlan from "./scripts/findTravelPlans";

import missions from "./missions";
import { createReportWriter, createFolderPathFromUrl } from "./actions/file";

export type Mission = (page: Page, browser?: Browser) => any;
export type Destination = {
  url: string;
  missions: [string | Mission];
};

export type TravelPlan = {
  destinations: Destination[];
};

const main = async (args: string[]) => {
  const [action = "follow", pathToTravelPlan = "travel-plan.js"] = args;

  switch (action) {
    case "init":
      createDefaultTravelPlan();
      break;
    case "follow":
    default:
      const plan = await findTravelPlan(pathToTravelPlan);
      if (!plan) {
        process.exit(1);
      } else {
        followTravelPlan(plan);
      }
      break;
  }
};

const helpers = {
  createReportWriter,
  createFolderPathFromUrl
};

export { missions, helpers };

main(process.argv.splice(2));
