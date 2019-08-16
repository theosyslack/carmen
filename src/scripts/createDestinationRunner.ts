import { Destination, Mission } from "..";
import log from "../actions/log";
import * as puppeteer from "puppeteer";
import createMissionRunner from "./createMissionRunner";
import { getMissionName } from "../common/mission";

const createDestinationRunner = (browser: puppeteer.Browser) => async (
  destination: Destination
) => {
  __logDestinationStart(destination);
  const { url, missions } = destination;
  const page = await browser.newPage();
  const runMission = createMissionRunner(page);
  await page.goto(url);

  return Promise.all(
    missions.map(mission => {
      log(`Running Mission: ${getMissionName(mission)}`, "pending");
      return runMission(mission);
    })
  );
};

const __logDestinationStart = ({ url, missions }: Destination) => {
  const missionsString = missions.map(getMissionName).join(", ");
  log(`${url} | ${missionsString}`, "pending");
  log("---", "pending");
};
export default createDestinationRunner;
