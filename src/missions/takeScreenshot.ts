import * as puppeteer from "puppeteer";
import { URL } from "url";
import * as path from "path";
import * as fs from "fs";
import log from "../actions/log";

export default async (page: puppeteer.Page) => {
  log("Taking a screenshot...", "pending");
  const location = await page.url();
  let { hostname, pathname } = new URL(location);
  let folderPath = pathname.replace(path.extname(pathname), "");
  let lastIndex = folderPath.lastIndexOf("/");
  let fileName = folderPath.substring(lastIndex + 1);
  folderPath = folderPath.substring(0, lastIndex);

  let finalPath = "./carmen-reports/takeScreenshot/" + hostname + folderPath;

  if (fileName == "") {
    fileName = "home";
  }

  finalPath.split(path.sep).reduce((prevPath, folder) => {
    const currentPath = path.join(prevPath, folder, path.sep);
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath);
    }
    return currentPath;
  }, "");

  await page.setViewport({
    width: 1920,
    height: await page.evaluate(() => document.body.clientHeight)
  });

  log("Capturing Screen for: " + fileName, "default");

  // TODO Allow user to inject CSS to ensure we dont run into issues with VH
  // await page.addStyleTag({ content: '.home .homeHero .homeHeroVideo{height: 600px !important}' });

  await page.screenshot({
    fullPage: true,
    path: finalPath + "/" + fileName + ".png"
  });

  return finalPath + "/" + fileName + ".png";
};
