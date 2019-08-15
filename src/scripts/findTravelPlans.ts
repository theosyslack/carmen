import { TravelPlan } from "..";
import { exists } from "../actions/file";
import log from "../actions/log";
import * as path from "path";
const findTravelPlan = async (
  relativePathOfTravelPlan
): Promise<TravelPlan> => {
  const pathToPlan = path.resolve(process.cwd(), relativePathOfTravelPlan);
  if (await exists(pathToPlan)) {
    log(`Picked up travel plan from ${relativePathOfTravelPlan}.`, "success");
    return import(pathToPlan);
  } else {
    log(`No plan found at ${relativePathOfTravelPlan}.`, "error");
    log(`Try running \`carmen init\`.`, "error");

    return undefined;
  }
};

export default findTravelPlan;
