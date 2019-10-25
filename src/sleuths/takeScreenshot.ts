import * as puppeteer from "puppeteer";
import { SleuthConfig, Sleuth } from "../..";

interface TakeScreenshotConfig extends SleuthConfig {
  viewport?: puppeteer.Viewport;
  fullPage?: boolean;
}

const defaultViewpoint = {
  width: 1920,
  height: 1080
};

const takeScreenshot: Sleuth<Buffer> = async ({
  page,
  viewport = defaultViewpoint,
  fullPage = true
}: TakeScreenshotConfig) => {
  await page.setViewport(viewport);

  return await page.screenshot({
    fullPage
  });
};

export default takeScreenshot;
