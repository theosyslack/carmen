import { read, exists, writeToNewFile } from "../actions/file";
import log from "../actions/log";

const createDefaultTravelPlan = async () => {
  const defaultTravelPlan = await read("src/templates/travel-plan.js");

  if (await exists("./travel-plan.js")) {
    log("travel-plan.js already exists, I won't overwrite.", "pending");
  } else {
    await writeToNewFile("travel-plan.js", defaultTravelPlan);
    log("Created travel-plan.js", "success");
  }
};

export default createDefaultTravelPlan;
