import checkForADACompliance from "./src/missions/checkForADACompliance";
import find404s from "./src/missions/find404s";
import findLargeMedia from "./src/missions/findLargeMedia";
import getPageSize from "./src/missions/getPageSize";
import takeScreenshot from "./src/missions/takeScreenshot";

const destinations = [
  {
    url: "http://www.google.com",
    missions: [checkForADACompliance, takeScreenshot]
  },
  {
    url: "http://www.bing.com",
    missions: [checkForADACompliance, getPageSize, takeScreenshot]
  },
  {
    url: "http://www.yahoo.com",
    missions: [find404s, takeScreenshot]
  }
];

export default {
  destinations
};
