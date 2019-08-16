import { Mission } from "..";
import puppeteer from "puppeteer";
import { getMissionFromName } from "../common/mission";

const createMissionRunner = (
  page: puppeteer.Page,
  browser?: puppeteer.Browser
) => async (missionOrMissionTitle: Mission | string) => {
  return getMissionFromName(missionOrMissionTitle)(page, browser);
};

export default createMissionRunner;
