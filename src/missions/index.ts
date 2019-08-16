import find404s from "./find404s";
import findLargeMedia from "./findLargeMedia";
import getPageSize from "./getPageSize";
import takeScreenshot from "./takeScreenshot";
import runLighthouseAudit from "./runLighthouseAudit";
// import checkForADACompliance from "./checkForADACompliance";

const Missions = {
  find404s,
  findLargeMedia,
  getPageSize,
  takeScreenshot,
  runLighthouseAudit
  // checkForADACompliance
};

export default Missions;
