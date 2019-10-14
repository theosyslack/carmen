import { Mission } from "../types/carmen";
import { createMission } from "../helpers/mission";
import { createFolderPathFromUrl } from "../helpers/file";
import getPageDimensions from "../sleuths/getPageDimensions";
import takeScreenshot from "../sleuths/takeScreenshot";

const name = "Save Screenshot";

const basePath = "./reports/Screenshots/";

const saveScreenshot = (url: string) =>
  createMission({
    name,
    url,
    mission: ({ page, log, report }) => {
      return report.update({ status: "SUCCESS" });
    },
    path: basePath + createFolderPathFromUrl(url)
  });

export default saveScreenshot;
