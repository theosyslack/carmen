import { Mission } from "..";
import puppeteer from "puppeteer";
import { getMissionFromName } from "../common/mission";

const createMissionRunner = (page: puppeteer.Page) => async (
  missionOrMissionTitle: Mission | string
) => {
  return getMissionFromName(missionOrMissionTitle)(page);
};

export default createMissionRunner;
