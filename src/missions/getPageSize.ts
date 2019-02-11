import * as path from "path";
import * as puppeteer from "puppeteer";
import { createReportWriter } from "../actions/file";
import log from "../actions/log";
export default async (page: puppeteer.Page) => {
  log("Getting Page Size...", "pending");
  const location = await page.url();
  let { hostname, pathname } = new URL(location);
  let folderPath = pathname.replace(path.extname(pathname), "");
  let lastIndex = folderPath.lastIndexOf("/");
  let fileName = folderPath.substring(lastIndex + 1);
  folderPath = folderPath.substring(0, lastIndex);

  const result = await page.evaluate(() => {
    const perf = performance.getEntries()[0];
    return perf.toJSON();
  });

  let finalPath = hostname + folderPath + "/" + fileName;

  const writePageSizeReport = createReportWriter("getPageSize", finalPath);

  writePageSizeReport(result);
  return result;
};
