import log from "../actions/log";
import puppeteer from "puppeteer";
import createDestinationRunner from "./createDestinationRunner";
import { CommanderStatic } from "commander";

const followTravelPlan = async (plan: TravelPlan, program: CommanderStatic) => {
  const browser = await puppeteer.launch({
    devtools: !!program.parent.debug
  });
  const runDestination = createDestinationRunner(browser);
  const { destinations } = plan;

  let count = 0;
  let start = Date.now();

  log(`Traveling to ${destinations.length} destinations.`, "success");
  for (const destination of destinations) {
    console.clear();
    const estimateTimeRemaining = () => {
      let duration = (Date.now() - start) / 1000;
      let secondsPerTask = duration / count;

      let tasksRemaining = destinations.length - count;
      let secondsRemaining = Number.parseFloat(
        `${secondsPerTask * tasksRemaining}`
      ).toFixed();
      // return duration / 1000 / amountDone;

      return count > 1 ? `(${secondsRemaining}s remaining)` : "";
    };
    count++;
    log(
      `${count} of ${destinations.length} ${estimateTimeRemaining()}`,
      "success"
    );
    await runDestination(destination);
  }
  // await Promise.all(destinations.map());
  log(`Travel plan completed.`, "success");

  return browser.close();
};

export default followTravelPlan;