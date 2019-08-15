import log from "../actions/log";
import * as puppeteer from "puppeteer";
import { TravelPlan } from "..";
import createDestinationRunner from "./createDestinationRunner";

const followTravelPlan = async (plan: TravelPlan) => {
  const browser = await puppeteer.launch();
  const runDestination = createDestinationRunner(browser);

  log(`Traveling to ${plan.length} destinations.`, "success");
  await Promise.all(plan.map(runDestination));
  log(`Travel plan completed.`, "success");

  await browser.close();
};

export default followTravelPlan;
