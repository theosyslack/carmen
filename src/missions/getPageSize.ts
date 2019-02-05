import * as path from "path";
import log from "../actions/log";
import * as puppeteer from "puppeteer";
import { writeObjectToFile, mkdir } from "../actions/file";
export default async (page: puppeteer.Page) => {
  const location = await page.url();
  let { hostname, pathname } = new URL(location);
  let folderPath = pathname.replace(path.extname(pathname), "");
  let lastIndex = folderPath.lastIndexOf("/");
  let fileName = folderPath.substring(lastIndex + 1);
  folderPath = folderPath.substring(0, lastIndex);

  let finalPath = "./page-size/" + hostname + folderPath;

  await mkdir(finalPath);
  // const browser = await puppeteer.launch({
  //   headless: true
  // });
  // const page = await browser.newPage();
  // const response = await page.goto(targetPage);
  //
  // page.metrics().then(console.log);
  // page.once("load", () => console.log("Page loaded!"));
  //
  // const perf = await page.evaluate(() => {
  //   // const result = {};
  //   // for (const key of Object.keys(window.performance.timing))
  //   //   result[key] = window.performance.timing[key];
  //   return window.performance.timing;
  // });
  //
  // console.log(perf);
  const result = await page.evaluate(() => {
    const perf = performance.getEntries()[0];
    return perf.toJSON();
  });

  writeObjectToFile(result, finalPath + fileName);
  return result;
  //
  // console.log("\n==== performance.toJSON() ====\n");
  // console.log(
  //   await page.evaluate(() => JSON.stringify(performance.toJSON(), null, "  "))
  // );
  //
  // console.log("\n==== page.metrics() ====\n");
  // const perf = await page.metrics();
  // console.log(JSON.stringify(perf, null, "  "));
};
