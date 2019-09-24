import log from "./log";
import { Page } from "puppeteer";
/*
  Sleuth runs your missions, doesn't get tired.
*/

// generate new Sleuth
export function sendSleuth({ missions, url }: Destination, page: Page) {
  return {
    [Symbol.asyncIterator]: async function*() {
      let missionIndex: number = 0;
      let results: any[] = [];
      // while (missionIndex < missions.length) {
      //   try {
      //     await page.goto(url);
      //     const missionResults: object[] = await runMission(
      //       missions[missionIndex],
      //       page
      //     );
      //     results.push(yield missionResults);
      //   } catch (error) {
      //     log(error, "error");
      //   }
      //   missionIndex = missionIndex + 1;
      // }
      return results;
    }
  };
}

// mission runner
export const runMission = (mission: Mission, page: Page) => mission(page);
