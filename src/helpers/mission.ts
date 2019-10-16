import log from "./log";
import {
  MissionConfig,
  Mission,
  MissionReport,
  FileConnection,
  MissionPayload,
  Creator,
  RunnableMission
} from "../types/carmen";
import { openFileConnection } from "./file";
import { getBrowser } from "../state/Browser";

export const createMission = (
  config: MissionConfig
): Promise<RunnableMission> => {
  const isMissionValid = config.mission && typeof config.mission === "function";
  const isNameValid = typeof config.name === "string";
  const isReportValid = typeof config.path === "string";

  const isValid = isMissionValid && isNameValid && isReportValid;

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

  if (config.url) await page.goto(config.url);

  const payload: MissionPayload = {
    ...config,
    browser,
    page,
    report,
    log
  };

  report.update({ config });

  return () => {
    return config.mission(Object.assign(payload));
  };
};
