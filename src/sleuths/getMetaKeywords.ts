import { Sleuth } from "../..";

const getMetaKeywords: Sleuth<string> = async ({ page }) => {
  return await page.evaluate(() => {
    return document
      .querySelector("meta[name=keywords]")
      .getAttribute("content");
  });
};

export default getMetaKeywords;
