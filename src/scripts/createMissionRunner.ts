import * as puppeteer from "puppeteer";
import { getMissionFromName } from "../common/mission";
import { Mission, MissionName } from "../types/carmen";

const createMissionRunner = (
  page: puppeteer.Page,
  browser?: puppeteer.Browser
) => async (missionOrMissionName: Mission | MissionName) => {
  try {
    return getMissionFromName(missionOrMissionName)(page, browser);
  } catch (e) {
    return e;
  }
};

export default createMissionRunner;
