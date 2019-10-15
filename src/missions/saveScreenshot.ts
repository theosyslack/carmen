import { MissionPayload, MissionConfig } from "../types/carmen";
import { createFolderPathFromUrl } from "../helpers/file";

import takeScreenshot from "../sleuths/takeScreenshot";

const name = "Save Screenshot";
const basePath = "./reports/Screenshots/";
export interface SaveScreenshotConfiguration {
  url: string;
}

const saveScreenshot = ({
  url
}: SaveScreenshotConfiguration): MissionConfig => {
  const path = basePath + createFolderPathFromUrl(url);
  return {
    name,
    url,
    path,
    mission: async ({ page, log, report }: MissionPayload) => {
      const screenshot = await takeScreenshot({ page });
      await report.create("/screenshot.png", screenshot);
      return report.update({
        status: "SUCCESS",
        payload: {
          url
        }
      });
    }
  };
};

export default saveScreenshot;
