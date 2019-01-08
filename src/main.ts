import { sendSleuth } from "./actions/sleuth";
import * as puppeteer from "puppeteer";
import log from "./actions/log";
import * as path from "path";
import { TravelPlan } from ".";

const main = async (args: string[]) => {
  const [action = "follow", relativePathToTravelPlan = "travel-plan.js"] = args;
  console.clear();

  const browser = await puppeteer.launch();
  const pathToTravelPlan = path.join(process.cwd(), relativePathToTravelPlan);

  switch (action) {
    case "follow":
    default:
      try {
        const travelPlan = await findTravelPlans(pathToTravelPlan);

        log(
          `Traveling to ${travelPlan.destinations.length} destinations.`,
          "pending"
        );

        const missionResults = await runMissions(travelPlan, browser);
        log(missionResults);
        await browser.close();
      } catch (e) {
        if (e.code === "MODULE_NOT_FOUND") {
          log(`No plan found at ${pathToTravelPlan}. ${e.code}`, "error");
        } else {
          log(e, "error");
        }
      }

      break;
  }
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
  const { default: travelPlan } = await import(pathToTravelPlan);
  return travelPlan;
};

main(process.argv.splice(2));
