import { sendSleuth } from "./actions/sleuth";
import log, { globe } from "./actions/log";

const main = async (args: string[]) => {
  const [action, pathToTravelPlan] = args;
  console.clear();
  console.log(action, pathToTravelPlan);
  switch (action) {
    case "follow":
      const {
        default: { destinations: travelPlan }
      } = await import(pathToTravelPlan);
      runMissions(travelPlan);
      break;
    default:
      log("You have to pass in a travel plan.", "error");
      log("yarn start follow travel-plan.ts", "pending");
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
  globe();
}

main(process.argv.splice(2));
