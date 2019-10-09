import { Mission, MissionReport } from "../types/carmen";
import { getBrowser } from "../state/Browser";
import log from "../helpers/log";

const logMissionReport = (report: MissionReport | null, progress: string) => {
  if (report === null) return;
  const { status, name, result } = report;

  switch (status) {
    case "FAILURE":
      log(`${progress} ${name}: ${result.error}`, "error");
      break;
    case "SUCCESS":
      log(`${progress} ${name}. `, "success");
      break;
    default:
      break;
  }
};

const createProgressString = (count: number, total: number) => {
  const totalString = total.toString();
  const countString = count.toString().padStart(totalString.length, " ");
  return `[${countString}/${totalString}]`;
};

const run = async (missions: Mission[]): Promise<MissionReport[]> => {
  const browser = await getBrowser(); // Initialize Browser, so it doesn't get initialized for each mission.

  let reports: MissionReport[] = [];

  const queue = missions.reduce(
    async (previousMission, currentMission, currentIndex) => {
      const progress = createProgressString(currentIndex + 1, missions.length);

      await previousMission;

      return currentMission().then(report => {
        logMissionReport(report, progress);
        reports.push(report);
        return report;
      });
    },
    Promise.resolve(null)
  );

  await queue;

  await browser.close();

  return reports;
};

export default run;
