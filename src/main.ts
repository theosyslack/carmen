#!/usr/bin/env node

import { sendSleuth } from "./actions/sleuth";
import * as puppeteer from "puppeteer";
import log from "./actions/log";
import * as path from "path";
import { TravelPlan } from ".";
import { compareImages } from "./actions/compare";

const main = async (args: string[]) => {
  const [action = "follow", relativePathToTravelPlan = "travel-plan.js"] = args;
  console.clear();

  const browser = await puppeteer.launch();
  const pathToTravelPlan = path.join(process.cwd(), relativePathToTravelPlan);

  switch (action) {
    case "compare":
      //TODO: Pass in command line arguments (`carmen compare image.png image2.png`)
      await compareImages();
      break;
    case "follow":
    default:
      const travelPlan = await findTravelPlans(pathToTravelPlan);

      log(
        `Traveling to ${travelPlan.destinations.length} destinations.`,
        "pending"
      );

      await runMissions(travelPlan, browser);
      break;
  }

  await browser.close();
};

async function runMissions(
  { destinations }: TravelPlan,
  browser: puppeteer.Browser
) {
  let results: any[] = [];

  await Promise.all(
    destinations.map(async destination => {
      const page = await browser.newPage();
      const responses = sendSleuth(destination, page);
      for await (const response of responses) {
        results.push(response);
      }
    })
  );

  return results;
  // TODO: Something cooler than console.log
  // console.log(results);
}

const findTravelPlans = async (pathToTravelPlan): Promise<TravelPlan> => {
  const asyncImport = await import(pathToTravelPlan).catch(e => {
    if (e.code === "MODULE_NOT_FOUND") {
      log(`No plan found at ${pathToTravelPlan}.`, "error");
      process.exit(1);
    } else {
      log(e, "error");
      process.exit(1);
    }
  });

  return asyncImport.default;
};

export { default as find404s } from "./missions/find404s";
export { default as findLargeMedia } from "./missions/findLargeMedia";
export { default as getPageSize } from "./missions/getPageSize";
export { default as takeScreenshot } from "./missions/takeScreenshot";

main(process.argv.splice(2));
