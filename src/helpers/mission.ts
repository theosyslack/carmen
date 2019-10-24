import log from "./log";
import { types } from "util";
import {
  MissionConfig,
  MissionReport,
  FileConnection,
  MissionPayload,
  RunnableMission
} from "../types/carmen";
import { openFileConnection } from "./file";
import { getBrowser } from "../state/Browser";
import getEventEmitter from "../events/getEvents";

export const createMission = (
  config: MissionConfig
): Promise<RunnableMission> => {
  const isMissionValid = config.mission && typeof config.mission === "function";
  const isNameValid = typeof config.name === "string";
  const isPathValid =
    typeof config.path === "string" && config.path.endsWith("/");

  const isValid = isMissionValid && isNameValid && isPathValid;

  if (!isValid) {
    console.table([
      {
        Title: "Is Mission Valid?",
        Value: isMissionValid,
        Item: config.mission
      },
      {
        Title: "Is Name Valid?",
        Value: isNameValid,
        Item: config.name
      },
      {
        Title: "Is Path Valid?",
        Value: isPathValid,
        Item: config.path
      }
    ]);
    log(`Looks like you've got a misconfigured mission.`, "error");

    process.exit(1);
  }

  return constructMission(<MissionConfig>config);
};

const constructMission = async (
  config: MissionConfig
): Promise<RunnableMission> => {
  const report: FileConnection<MissionReport> = await openFileConnection(
    config.path
  );

  const browser = await getBrowser();
  const page = await browser.newPage();
  const events = getEventEmitter();

  if (config.url) await page.goto(config.url);

  const payload: MissionPayload = {
    ...config,
    browser,
    page,
    report,
    events,
    log
  };

  report.update({ config });

  return () => {
    events.emit("mission-started", config);
    let { mission } = config;
    // console.log("Is Mission promise:", types.isPromise(async () => {}));

    if (mission.constructor.name !== "AsyncFunction") {
      mission = async payload => config.mission(payload);
    }

    return mission(payload).then(
      async payload => {
        const latestReport = await report.update({
          status: "SUCCESS",
          payload
        });
        await page.close();
        events.emit("mission-success", latestReport);
        return latestReport as Promise<MissionReport>;
      },
      async (error: Error) => {
        const latestReport = await report.update({
          status: "FAILURE",
          error: error.toString(),
          payload: {
            stack: error.stack,
            name: error.name,
            message: error.message
          }
        });
        events.emit("mission-failure", latestReport);
        await page.close();
        return latestReport as Promise<MissionReport>;
      }
    );
  };
};
