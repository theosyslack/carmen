import { Sleuth } from "../..";

const getMetaDecription: Sleuth<string> = async ({ page }) => {
  return await page.evaluate(() => {
    return document
      .querySelector("meta[name=description]")
      .getAttribute("content");
  });
};

export default getMetaDecription;
