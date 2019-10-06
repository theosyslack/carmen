import { Mission, MissionReport, MissionResult } from "../types/carmen";
import close from "./close";
import { getBrowser } from "../state/Browser";
import log from "../helpers/log";

const logMissionReport = (report: MissionReport | null, progress: string) => {
  if (report === null) return;
  const { status, name, result } = report;

  switch (status) {
    case "FAILURE":
      log(`[${progress}] ${name}: ${result.error}`, "error");
      break;
    case "SUCCESS":
      log(`[${progress}] ${name}. `, "success");
      break;
    default:
      break;
  }
};

const run = async (missions: Mission[]) => {
  await getBrowser(); // Initialize Browser, so it doesn't get initialized for each mission.

  const queue = missions.reduce(
    async (previousMission, currentMission, currentIndex) => {
      const progress = `${currentIndex + 1}/${missions.length}`;

      await previousMission;

      return currentMission().then(report =>
        logMissionReport(report, progress)
      );
    },
    Promise.resolve(null)
  );

  await queue;

  await close();
};

export default run;
