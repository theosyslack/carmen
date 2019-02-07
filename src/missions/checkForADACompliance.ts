import log from "../actions/log";
import * as puppeteer from "puppeteer";
import { createReportWriter } from "../actions/file";
import { AxePuppeteer } from "axe-puppeteer";
import { Mission } from "..";
const checkForADACompliance = async (page: puppeteer.Page) => {
  let result;
  log("Checking for ADA issues...", "pending");

  const results = await new AxePuppeteer(page).analyze();
  console.log(`${results.violations.length} issues found.`);

  const writeReport = createReportWriter(
    "checkForADACompliance",
    Date.now().toString()
  );

  await writeReport(results); //TODO: Update to use URL.
  return result;
};

export default checkForADACompliance as Mission;
