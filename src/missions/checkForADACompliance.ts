import log from "../actions/log";
import * as puppeteer from "puppeteer";
import { createReportWriter, write, writeToNewFile } from "../actions/file";
import { AxePuppeteer } from "axe-puppeteer";
import { Mission } from "..";
import { createFolderPathFromUrl } from "../common/utilities";
import { join } from "path";
import { AxeResults } from "axe-core";
import { summarizeAxeResults } from "../actions/compare";

const checkForADACompliance = async (page: puppeteer.Page) => {
  let result;
  log("Checking for ADA issues...", "pending");

  const url = await page.url();
  const folder = join("checkForADACompliance", createFolderPathFromUrl(url));

  const results: AxeResults = await new AxePuppeteer(page).analyze();
  log(`${results.violations.length} issues found.`, "pending");

  const now = Date.now().toString();

  const writeReport = createReportWriter(folder, now);

  const summarizedResults = summarizeAxeResults(results);

  await writeToNewFile(`./${folder}/test.md`, summarizedResults);

  await writeReport(results);
  return result;
};

export default checkForADACompliance as Mission;
