import * as puppeteer from "puppeteer";
import log from "../actions/log";
import { createReportWriter } from "../actions/file";
import { URL } from "url";

const sizeLimit = 2000000;

export default async (page: puppeteer.Page) => {
  log("Finding large media...", "pending");
  const writeReport = createReportWriter("findLargeMedia");
  let largeMedia = [];
  let targetPage = await page.url();
  const { hostname, pathname } = new URL(targetPage);
  const folderPath = `${hostname}/${pathname}`;
  await page.on("response", response => {
    let resourceType = response.request().resourceType();
    if (resourceType == "image" || resourceType == "media") {
      let contentLength = parseInt(response.headers()["content-length"], 10);
      if (typeof contentLength != "undefined" && contentLength >= sizeLimit) {
        largeMedia.push(contentLength + " :: " + response.url());
        console.error(contentLength + " :: " + response.url());
      }
    }
  });

  if (largeMedia.length > 0) {
    writeReport({ largeMedia });
  }
  return;
};
