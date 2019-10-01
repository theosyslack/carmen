import find404s from "./find404s";
import findLargeMedia from "./findLargeMedia";
import runPerformanceTest from "./runPerformanceTest";
import takeScreenshot from "./takeScreenshot";
import runLighthouseAudit from "./runLighthouseAudit";
import getLocalLinks from "./getLocalLinks";
import getHTML from "./getHTML";

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
