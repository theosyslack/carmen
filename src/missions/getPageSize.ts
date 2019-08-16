import * as path from "path";
import * as puppeteer from "puppeteer";
import { createReportWriter } from "../actions/file";

export default async function getPageSize(page: puppeteer.Page) {
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
}
