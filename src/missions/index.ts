import find404s from "./find404s";
import findLargeMedia from "./findLargeMedia";
import runPerformanceTest from "./runPerformanceTest";
import takeScreenshot from "./takeScreenshot";
import runLighthouseAudit from "./runLighthouseAudit";
import getLocalLinks from "./getLocalLinks";
import getHTML from "./getHTML";
import {
  MissionCollection,
  CreateMissionResult,
  Mission,
  MissionResult
} from "../types/carmen";
import { createReportWriter } from "../common/report";

export const createMission = ({
  mission,
  reportOptions
}: CreateMissionResult): Mission => async (page, browser, history) => {
  const writer = await createReportWriter(
    reportOptions.type || mission.name,
    reportOptions.fileName
  );
  const result = await mission(page, browser, history);
  let report = {
    status: "UNKNOWN",
    mission,
    ...result
  } as MissionResult;
  await writer(report);
  return report;
};

const Missions: MissionCollection = {
  find404s,
  getHTML,
  getLocalLinks,
  findLargeMedia,
  takeScreenshot,
  runPerformanceTest,
  runLighthouseAudit
};

export default Missions;
