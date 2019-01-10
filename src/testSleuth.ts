import { sendSleuth } from "./actions/sleuth";
import { Mission, Destination } from ".";
import * as puppeteer from "puppeteer";

(<any>Symbol).asyncIterator =
  Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

(async function() {
  const browser = await puppeteer.launch({
    devtools: true
  });
  const page = await browser.newPage();

  const missions: Mission[] = [
    function(page) {
      return `traveled to ${destination}`;
    },
    function(page) {
      return `went something other than ${destination}`;
    }
  ];

  const destination: Destination = {
    url: "http://localhost",
    missions
  };

  const missionResult = sendSleuth(destination, page);

  for await (const result of missionResult) {
    console.log(result);
  }
})();
