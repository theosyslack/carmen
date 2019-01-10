import { sendSleuth } from "./actions/sleuth";
import { Mission, Destination } from ".";
import * as puppeteer from "puppeteer";

(<any>Symbol).asyncIterator =
  Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

(async function() {
  const missions: any[] = [
    function(destination: string) {
      return `traveled to ${destination}`;
    },
    function(destination: string) {
      return `went something other than ${destination}`;
    }
  ];

  const destination: string = "http://localhost";

  const missionResult = sendSleuth(missions, destination);

  for await (const result of missionResult) {
    console.log(result);
  }
})();
