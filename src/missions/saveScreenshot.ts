import takeScreenshot from "../sleuths/takeScreenshot";
import { getBrowser } from "../state/Browser";
import { Mission } from "../types/carmen";
import { writeToNewFile } from "../helpers/file";
import { createMission } from "../helpers/mission";

export const saveScreenshot = (url: string, name: string): Mission => {
  return createMission(async () => {
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.goto(url);

    return takeScreenshot({ page })
      .then(async screenshot => {
        await writeToNewFile(name, screenshot);
        await page.close();
        return {
          screenshot,
          name,
          url
        };
      })
      .catch(async reason => {
        await page.close();
        return { reason };
      });
  });
};
