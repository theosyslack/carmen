import takeScreenshot from "../sleuths/takeScreenshot";
import { getBrowser } from "../state/Browser";
import { Mission } from "../types/carmen";
import { writeToNewFile, createFolderPathFromUrl } from "../helpers/file";
import { createMission } from "../helpers/mission";

const createScreenshotPath = (url: string, name: string) => {
  const path = createFolderPathFromUrl(url);
  return path + name + ".png";
};

export const saveScreenshot = (url: string): Mission => {
  return createMission(`Save Screenshot (${url})`, async () => {
    const browser = await getBrowser();
    const page = await browser.newPage();
    const path = createScreenshotPath(url, "index");

    await page.goto(url);

    const report = await takeScreenshot({ page })
      .then(async screenshot => {
        await writeToNewFile(path, screenshot);
        return { screenshot };
      })
      .catch(async error => {
        return { error: error.message };
      });

    await page.close();
    return report;
  });
};
