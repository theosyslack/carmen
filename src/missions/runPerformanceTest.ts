import * as puppeteer from "puppeteer";
import { createReportWriter, createFolderPathFromUrl } from "../actions/file";

export default async function runPerformanceTest(page: puppeteer.Page) {
  const location = await page.url();
  const reportPath = createFolderPathFromUrl(location) + `${Date.now()}.json`;
  const writeReport = createReportWriter("performance", reportPath);

  const result = await page.evaluate(() => {
    const perf = performance.getEntries()[0];
    return perf.toJSON();
  });

  writeReport(result);
  return result;
}
