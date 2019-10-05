import * as puppeteer from "puppeteer";
import { SleuthConfig } from "../types/carmen";

interface TakeScreenshotConfig extends SleuthConfig {
  viewport?: puppeteer.Viewport;
  fullPage?: boolean;
}

const defaultViewpoint = {
  width: 1920,
  height: 1080
};

async function takeScreenshot({
  page,
  viewport = defaultViewpoint,
  fullPage = false
}: TakeScreenshotConfig) {
  await page.setViewport(viewport);

  return await page.screenshot({
    fullPage
  });
}

export default takeScreenshot;
