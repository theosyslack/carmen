import takeScreenshot from "../sleuths/takeScreenshot";
import getPageDimensions from "../sleuths/getPageDimensions";
import { getBrowser } from "../state/Browser";
import { Mission, MissionResult } from "../types/carmen";
import { writeToNewFile, createFolderPathFromUrl } from "../helpers/file";
import { createMission } from "../helpers/mission";

const path = "./reports/Screenshots/";

const createPaths = (url: string, name: string) => {
  const urlPath = createFolderPathFromUrl(url);
  const report = path + urlPath;
  const screenshot = report + name + ".png";

  return {
    screenshot,
    report
  };
};

export const saveScreenshot = (url: string): Mission => {
  const paths = createPaths(url, "index");
  return createMission(
    `Save Screenshot (${url})`,
    paths.report,
    async (): Promise<MissionResult> => {
      const browser = await getBrowser();
      const page = await browser.newPage();

      await page.goto(url);

      const viewport = await getPageDimensions({ page });
      const result = await takeScreenshot({ page })
        .then(async (screenshot: Buffer) => {
          await writeToNewFile(paths.screenshot, screenshot);
          return {
            result: { data: { viewport, url } },
            context: { screenshot, url }
          };
        })
        .catch(async (error: Error) => {
          return { result: { error: error.message } };
        });

      await page.close();
      return result;
    }
  );
};

export default saveScreenshot;
