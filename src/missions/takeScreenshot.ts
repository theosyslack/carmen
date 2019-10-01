import * as puppeteer from "puppeteer";
import {
  createFolderPathFromUrl,
  createFolderForFile,
  createPathForReport,
  writeReport
} from "../actions/file";
import { createURLFromString } from "../common/utilities";
import { MissionResult } from "../types/carmen";

export default async function takeScreenshot(
  page: puppeteer.Page
): Promise<MissionResult> {
  // log("Taking a screenshot...", "pending");
  const now = Date.now();
  const url = await page.url();
  const title = await page.title();
  const folderPath =
    createPathForReport("screenshots") + createFolderPathFromUrl(url);
  const fileName = `_screenshot.png`;
  const filePath = folderPath + fileName;

  await createFolderForFile(filePath);

  await page.setViewport({
    width: 1920,
    height: await page.evaluate(() => document.body.clientHeight)
  });
  const filename = createFolderPathFromUrl(url) + "_screenshot-data.json";

  // TODO Allow user to inject CSS to ensure we don't run into issues with VH
  // await page.addStyleTag({ content: '.home .homeHero .homeHeroVideo{height: 600px !important}' });
  await writeReport("screenshots", { url: url, title, now }, filename);

  const buffer = await page.screenshot({
    fullPage: true,
    path: filePath
  });

  return {
    url: createURLFromString(url),
    status: "SUCCESS",
    mission: this,
    message: `${title} has been saved to ${filename}`,
    payload: buffer
  };
}
