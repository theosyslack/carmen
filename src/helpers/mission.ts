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
    console.table({ isMissionValid, isNameValid, isPathValid });
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
    events.on("what", () => {
      console.log("listening");
    });
    const { mission } = config;
    // console.log("Is Mission promise:", types.isPromise(async () => {}));

    if (mission.constructor.name !== "AsyncFunction") {
      // If it is not Async
      try {
        const result = mission(payload);
        events.emit("mission-success", result);
        return report.update({ status: "SUCCESS", payload: result });
      } catch (error) {
        events.emit("mission-failure", error);
        return report.update({ status: "FAILURE", payload: { error } });
      }
    } else {
      return mission(payload).then(
        payload => {
          events.emit("mission-success", config);
          return report.update({
            status: "SUCCESS",
            payload
          });
        },
        error => {
          events.emit("mission-failure", config);
          return report.update({
            status: "FAILURE",
            payload: {
              error
            }
          });
        }
      );
    }
  };
};
