const {
  default: checkForADACompliance
} = require("./dist/missions/checkForADACompliance");
const { default: find404s } = require("./dist/missions/find404s");
const { default: findLargeMedia } = require("./dist/missions/findLargeMedia");
const { default: getPageSize } = require("./dist/missions/getPageSize");
const { default: takeScreenshot } = require("./dist/missions/takeScreenshot");

const destinations = [
  {
    url: "http://www.google.com",
    missions: [checkForADACompliance, takeScreenshot]
  },
  {
    url: "http://www.bing.com",
    missions: [checkForADACompliance, getPageSize, takeScreenshot]
  }
];

exports.default = {
  destinations
};
