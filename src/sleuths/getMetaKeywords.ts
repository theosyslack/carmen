import { Sleuth } from "../..";

const getMetaKeywords: Sleuth<string> = async ({ page }) => {
  return await page.evaluate(() => {
    const element: Element = document.querySelector("meta[name=keywords]");
    let result: string = "";
    if (element) {
      result = element.getAttribute("content").trim() || "";
    }
    return result;
  });
};

export default getMetaKeywords;
