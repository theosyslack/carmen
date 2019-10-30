import { MissionPayload, MissionConfig } from "../..";
import { createFolderPathFromUrl } from "../helpers/file";

import takeScreenshot from "../sleuths/takeScreenshot";

const name = "Save Screenshot";
const basePath = "./reports/Screenshots/";
export interface SaveScreenshotConfiguration {
  url: string;
}

export interface ScanScreenshotPayload {
  url: string;
}

const saveScreenshot = ({
  url
}: SaveScreenshotConfiguration): MissionConfig<ScanScreenshotPayload> => {
  const path = basePath + createFolderPathFromUrl(url);
  return {
    name,
    url,
    path,
    mission: async ({
      page,
      report
    }: MissionPayload<ScanScreenshotPayload>) => {
      const screenshot = await takeScreenshot({ page });
      await report.create("/screenshot.png", screenshot);
      return { url };
    }
  };
};

export default saveScreenshot;
