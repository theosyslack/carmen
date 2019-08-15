#!/usr/bin/env node

import createDefaultTravelPlan from "./scripts/createDefaultTravelPlan";
import followTravelPlan from "./scripts/followTravelPlan";
import findTravelPlan from "./scripts/findTravelPlans";
import { log } from "util";

const main = async (args: string[]) => {
  const [action = "follow", pathToTravelPlan = "travel-plan.js"] = args;

  switch (action) {
    // case "compare":
    // // TODO: Pass in command line arguments (`carmen compare image.png image2.png`)
    //   await compareImages();
    //   break;
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

main(process.argv.splice(2));
