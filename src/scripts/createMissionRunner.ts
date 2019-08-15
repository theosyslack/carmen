import { Mission } from "..";
import puppeteer from "puppeteer";
import Missions from "../missions";

const createMissionRunner = (page: puppeteer.Page) => async (
  missionOrMissionTitle: Mission | string
) => {
  let mission = __getMissionFromTitle(missionOrMissionTitle);

  // console.log(mission);
  return mission(page);
};

const __getMissionFromTitle = (missionTitle): Mission => {
  if (typeof missionTitle === "function") {
    return missionTitle;
  } else {
    const defaultMission = () => {};
    return Missions[missionTitle] || defaultMission;
  }
};

export default createMissionRunner;
