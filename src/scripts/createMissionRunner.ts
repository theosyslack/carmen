import * as puppeteer from "puppeteer";
import { getMissionFromName } from "../common/mission";

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
