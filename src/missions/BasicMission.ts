import { createMission } from "../helpers/mission";
import { MissionPayload, MissionConfig } from "../types/carmen";

const name = "Basic";
const basePath = "./reports/Basic/";

interface BasicMissionConfiguration {
  url: string;
}

export const BasicMission = ({
  url
}: BasicMissionConfiguration): MissionConfig => {
  return {
    name,
    path: basePath + "report.json",
    url,
    mission: async ({ page, log, report, url }: MissionPayload) => {
      log("You did it!", "success");
      log("Basic Mission beginning", "info");

      const path = report.dir + "/screenshot.png";
      log(`${path} | Taking screenshot`, "pending");

      await page.screenshot({ path, fullPage: true });

      const result = await report.update({
        status: "SUCCESS",
        payload: { message: "Hello from BasicMission!", url }
      });
      return result;
    }
  };
};

export default BasicMission;