import * as puppeteer from "puppeteer";
import { URL } from "url";
import log from "../actions/log";
import * as fs from "fs";
import { __ } from "ramda";
import {
  writeObjectToFile,
  writeReport,
  createReportWriter
} from "../actions/file";

export default async (page: puppeteer.Page) => {
  let failedStatus: any[] = [];
  let errorPages: any[] = [];
  let pageOrigin;

  const targetPage = await page.url();
  let resultAnchors = await page.evaluate(() => {
    let elements = Array.from(document.querySelectorAll("a")).map(
      link => link.href
    );
    return elements;
  });

  log(resultAnchors.length + " links found on " + targetPage, "pending");

  await asyncForEach(resultAnchors, async anchor => {
    let { host, origin, pathname, search } = new URL(anchor);
    pageOrigin = host;
    let sanitizedURL = origin + pathname + search;

    log("Navigating to: " + sanitizedURL, "default");
    try {
      const response = await page.goto(sanitizedURL, {
        waitUntil: "domcontentloaded",
        timeout: 6000
      });
      if (response.status() > 399)
        failedStatus.push(sanitizedURL, response.status());
    } catch (error) {
      log("Error on page: " + anchor + error, "error");
      errorPages.push({ foundOn: sanitizedURL, url: anchor, error });
    }
  });

  const writeFailedResults = createReportWriter(
    `find404s`,
    `${pageOrigin}/failed.json`
  );
  const writeErrorResults = createReportWriter(
    `find404s`,
    `${pageOrigin}/errors.json`
  );

  await writeFailedResults(failedStatus);
  await writeErrorResults(errorPages);
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
