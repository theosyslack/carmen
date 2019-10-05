import { Viewport } from "puppeteer";
import { SleuthConfig } from "../types/carmen";

async function getPageDimensions({ page }: SleuthConfig): Promise<Viewport> {
  return await page.evaluate(() => {
    return {
      height: document.body.clientHeight,
      width: document.body.clientWidth
    };
  });
}

export default getPageDimensions;
