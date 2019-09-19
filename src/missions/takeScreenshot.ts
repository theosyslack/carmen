import * as puppeteer from "puppeteer";
import { URL } from "url";
import * as path from "path";
import * as fs from "fs";
import {
  createFolderPathFromUrl,
  createFolderForFile,
  createPathForReport
} from "../actions/file";

export default async function takeScreenshot(page: puppeteer.Page) {
  // log("Taking a screenshot...", "pending");
  const now = Date.now();
  const location = await page.url();
  const folderPath =
    createPathForReport("screenshots") + createFolderPathFromUrl(location);
  const fileName = `.png`;
  const filePath = folderPath + fileName;

  await createFolderForFile(filePath);

  await page.setViewport({
    width: 1920,
    height: await page.evaluate(() => document.body.clientHeight)
  });

  // TODO Allow user to inject CSS to ensure we don't run into issues with VH
  // await page.addStyleTag({ content: '.home .homeHero .homeHeroVideo{height: 600px !important}' });

  return page.screenshot({
    fullPage: true,
    path: filePath
  });
}
