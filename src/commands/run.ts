import { getBrowser } from "../state/Browser";
import log from "../helpers/log";
import { createBlankReport } from "../helpers/report";
import { createMission } from "../helpers/mission";
import { LaunchOptions } from "puppeteer";
import { RunnableMission, MissionConfig, MissionReport } from "../types/carmen";

export interface RunOptions {
  launchOptions?: LaunchOptions;
}

// const logMissionReport = (
//   report: MissionReport | null,
//   progress: string
// ) => {
//   if (report === null) return;
//   const { status, name, result } = report;

//   switch (status) {
//     case "FAILURE":
//       log(`${progress} ${name}: ${result.error}`, "error");
//       break;
//     case "SUCCESS":
//       log(`${progress} ${name}. `, "success");
//       break;
//     default:
//       break;
//   }
// };

const createProgressString = (count: number, total: number) => {
  const totalString = total.toString();
  const countString = count.toString().padStart(totalString.length, " ");
  return `[${countString}/${totalString}]`;
};

const EmptyRunnableMission: RunnableMission = async () =>
  await createBlankReport();

const run = async (configs: MissionConfig[], options: RunOptions = {}) => {
  try {
    const browser = await getBrowser(options.launchOptions);

    let reports: MissionReport[] = [];
    let count = 0;
    log(`Running ${configs.length} missions`, "info");

    for (const config of configs) {
      ++count;
      console.clear();
      const logString = `Mission #${count}/${configs.length} ${config.name} ${
        config.url ? `(${config.url})` : ""
      }`;
      const mission = await createMission(config);
      log(logString, "pending");
      const report = await mission();

      if (report.status === "SUCCESS") {
        log(logString, "success");
      } else {
        log(logString, "error");
      }
      reports.push(report);
    }

    await browser.close();
    log(`Completed All Missions.`, "success");
    return reports;
  } catch (e) {
    console.error(e);
    log("Failed. Aww shoot.", "error");
    process.exit(1);
  }
  process.exit(1);
};

export default run;
