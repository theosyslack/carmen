import log from "../actions/log";
import puppeteer from "puppeteer";
import createDestinationRunner from "./createDestinationRunner";
import { TravelPlan } from "..";

const followTravelPlan = async (plan: TravelPlan) => {
  const browser = await puppeteer.launch();
  const runDestination = createDestinationRunner(browser);
  const { destinations } = plan;

  log(`Traveling to ${destinations.length} destinations.`, "success");
  await Promise.all(destinations.map(runDestination));
  log(`Travel plan completed.`, "success");

  await browser.close();
};

export default followTravelPlan;
