import * as puppeteer from "puppeteer";
import { URL } from "url";
import log from "../actions/log";
import { createReportWriter } from "../actions/file";

export default async function find404s(page: puppeteer.Page) {
  let failedStatus: any[] = [];
  let errorPages: any[] = [];
  let successfulStatus: any = [];
  let pageOrigin;

  const targetPage = await page.url();
  const { hostname, pathname } = new URL(targetPage);
  const folderPath = `${hostname}/${pathname}`;
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

      const response = await page.goto(sanitizedURL, {
        waitUntil: "domcontentloaded",
        timeout: 6000
      });
      if (response.status() > 399) {
        failedStatus.push({
          url: targetPage,
          anchor,
          status: response.status()
        });
        log(sanitizedURL, "error");
      } else {
        successfulStatus.push({
          url: targetPage,
          status: response.status()
        });
        log(sanitizedURL, "success");
      }
    } catch (error) {
      log(`${anchor} (${error})`, "error");
      errorPages.push({ url: targetPage, anchor, error });
    }
  });

  const writeSuccessfulResults = createReportWriter(
    `find404s`,
    `${folderPath}/succeeded.json`
  );
  const writeFailedResults = createReportWriter(
    `find404s`,
    `${folderPath}/failed.json`
  );
  const writeErrorResults = createReportWriter(
    `find404s`,
    `${folderPath}/error.json`
  );

  await writeSuccessfulResults(successfulStatus);
  await writeFailedResults(failedStatus);
  await writeErrorResults(errorPages);
}

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
