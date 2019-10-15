import { Viewport } from "puppeteer";
import { Sleuth } from "../types/carmen";

const getPageDimensions: Sleuth<Viewport> = async ({ page }) => {
  return await page.evaluate(() => {
    return {
      height: document.body.clientHeight,
      width: document.body.clientWidth
    };
  });
};

export default getPageDimensions;
