import find404s from "./find404s";
import findLargeMedia from "./findLargeMedia";
import runPerformanceTest from "./runPerformanceTest";
import takeScreenshot from "./takeScreenshot";
import runLighthouseAudit from "./runLighthouseAudit";

const Missions = {
  find404s,
  findLargeMedia,
  takeScreenshot,
  runPerformanceTest,
  runLighthouseAudit
};

export default Missions;
