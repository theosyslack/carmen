import * as puppeteer from "puppeteer";
import { getMissionFromName } from "../common/mission";

const createMissionRunner = (
  page: puppeteer.Page,
  browser?: puppeteer.Browser
) => async (missionOrMissionTitle: Mission | string) => {
  try {
    return getMissionFromName(missionOrMissionTitle)(page, browser);
  } catch (e) {
    return e;
  }
};

export default createMissionRunner;
