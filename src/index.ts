import allMissions, { createMission } from "./missions";
import {
  createFolderPathFromUrl,
  createReportWriter,
  getContentsAsObject,
  writeReport
} from "./actions/file";
import { compareImages } from "./actions/compare";
import followTravelPlan from "./scripts/followTravelPlan";

export const helpers = {
  writeReport,
  createReportWriter,
  createFolderPathFromUrl,
  getContentsAsObject
};

export const create = {
  mission: createMission
};

export const missions = allMissions;
export const follow = followTravelPlan;
export const compare = compareImages;

export default { create, missions, follow, compare };
