import { Sleuth } from "../..";

const getMetaDecription: Sleuth<string> = async ({ page }) => {
  return await page.evaluate(() => {
    const element: Element = document.querySelector("meta[name=description]");
    let result: string = "";
    if (element) {
      result = element.getAttribute("content").trim() || "";
    }
    return result;
  });
};

export default getMetaDecription;
