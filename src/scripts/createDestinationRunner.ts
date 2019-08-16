import { Destination } from "..";
import log from "../actions/log";
import * as puppeteer from "puppeteer";
import createMissionRunner from "./createMissionRunner";

const createDestinationRunner = (browser: puppeteer.Browser) => async (
  destination: Destination
) => {
  __logDestinationStart(destination);
  const { url, missions } = destination;
  const page = await browser.newPage();
  const runMission = createMissionRunner(page);
  await page.goto(url);

  return Promise.all(missions.map(mission => runMission(mission)));
};

const __logDestinationStart = ({ url, missions }: Destination) => {
  const missionsString = missions
    .map(mission => (typeof mission === "function" ? mission.name : mission))
    .join(", ");
  log(`${url} | ${missionsString}`, "pending");
  log("---", "pending");
};
export default createDestinationRunner;
