import * as puppeteer from "puppeteer";
import { URL } from "url";
import log from "../actions/log";
import * as fs from "fs";
import { writeObjectToFile } from "../actions/file";

export default async (page: puppeteer.Page) => {
  let failedStatus: any[] = [];
  let errorPages: any[] = [];
  let pageOrigin;

  const writeErrorResults = async errorPages => {
    const path = `./reports/${pageOrigin}/errorPages.json`;
    return await writeObjectToFile(errorPages, path).catch(e => {
      log(`Failed to save file to: ${path} with error: ${e}`);
    });
  };

  const writeFailedResults = async errorPages => {
    const path = `./reports/${pageOrigin}/failedStatus.json`;
    return await writeObjectToFile(errorPages, path).catch(e => {
      log(`Failed to save file to: ${path} with error: ${e}`);
    });
  };

  const targetPage = await page.url();
  let resultAnchors = await page.evaluate(() => {
    let elements = Array.from(document.querySelectorAll("a")).map(
      link => link.href
    );
    return elements;
  });

  log(resultAnchors.length + " links found on " + targetPage, "pending");

  await asyncForEach(resultAnchors, async anchor => {
    try {
      let { host, origin, pathname, search } = new URL(anchor);
      pageOrigin = host;
      let sanitizedURL = origin + pathname + search;

      log("Navigating to: " + sanitizedURL, "default");

      const response = await page.goto(sanitizedURL, {
        waitUntil: "domcontentloaded",
        timeout: 6000
      });
      if (response.status() > 399)
        failedStatus.push(sanitizedURL, response.status());
    } catch (error) {
      log("Error on page: " + anchor + error, "error");
      errorPages.push({ anchor, error });
    }
  });

  checkDirectorySync("./reports");
  checkDirectorySync("./reports/" + pageOrigin);

  console.log("Done");

  await writeFailedResults(failedStatus);
  await writeErrorResults(errorPages);
};

const checkDirectorySync = function(dir) {
  try {
    fs.statSync(dir);
  } catch (e) {
    fs.mkdirSync(dir);
    log("Creating Dir: " + dir, "default");
  }
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
