import { sendSleuth } from "./actions/sleuth";
import log from "./actions/log";
import * as path from "path";
import { TravelPlan } from ".";

const main = async (args: string[]) => {
  const [action = "follow", relativePathToTravelPlan = "travel-plan.js"] = args;
  console.clear();
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

async function runMissions(travelPlan) {
  let results: any[] = [];
  for await (const destination of travelPlan) {
    const responses = sendSleuth(destination.missions, destination.url);
    for await (const response of responses) {
      results.push(response);
    }
  }

  // TODO: Something cooler than console.log
  // console.log(results);
}

const findTravelPlans = async (pathToTravelPlan): Promise<TravelPlan> => {
  const { default: travelPlan } = await import(pathToTravelPlan);
  return travelPlan;
};

main(process.argv.splice(2));
