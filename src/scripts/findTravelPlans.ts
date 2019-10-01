import { exists } from "../actions/file";
import log from "../actions/log";
import * as path from "path";
import { TravelPlan } from "../types/carmen";

const findTravelPlan = async (
  relativePathOfTravelPlan: string
): Promise<TravelPlan> => {
  const pathToPlan = path.resolve(process.cwd(), relativePathOfTravelPlan);
  if (await exists(pathToPlan)) {
    return import(pathToPlan);
  } else {
    log(`No plan found at ${relativePathOfTravelPlan}.`, "error");
    log(`Try running \`carmen init\`.`, "error");
    return undefined;
  }
};

export default findTravelPlan;
