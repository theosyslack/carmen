import log from "../helpers/log";
import { getBrowser } from "../state/Browser";
import { createMission } from "../helpers/mission";
import { LaunchOptions } from "puppeteer";
import { MissionConfig, MissionReport } from "../types/carmen";

export interface RunOptions {
  launchOptions?: LaunchOptions;
}

const createProgressString = (count: number, total: number) => {
  const totalString = total.toString();
  const countString = count.toString().padStart(totalString.length, " ");
  return `[${countString}/${totalString}]`;
};

const run = async (configs: MissionConfig[], options: RunOptions = {}) => {
  try {
    const browser = await getBrowser(options.launchOptions);

    let reports: MissionReport[] = [];
    let count = 0;
    log(`Running ${configs.length} missions`, "info");

    for (const config of configs) {
      ++count;

      const logString = `${createProgressString(count, configs.length)} ${
        config.name
      } ${config.url ? `[ ${config.url} ]` : ""}`;
      const mission = await createMission(config);
      log(logString, "pending");
      const report = await mission();

      if (report.status === "SUCCESS") {
        log(logString, "success");
      } else {
        log(logString + ` ${report.error}`, "error");
      }
      reports.push(report);
    }

    log(`Completed All Missions.`, "success");
    await browser.close();
    return reports;
  } catch (e) {
    console.error(e);
    log("Failed. Aww shoot.", "error");
  }
  process.exit(1);
};

export default run;
