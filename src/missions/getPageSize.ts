import * as puppeteer from "puppeteer";

export default async targetPage => {
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

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(targetPage);

  console.log(
    await page.evaluate(() => {
      const perf = performance.getEntries()[0];
      return JSON.stringify(perf);
    })
  );
  //
  // console.log("\n==== performance.toJSON() ====\n");
  // console.log(
  //   await page.evaluate(() => JSON.stringify(performance.toJSON(), null, "  "))
  // );
  //
  // console.log("\n==== page.metrics() ====\n");
  // const perf = await page.metrics();
  // console.log(JSON.stringify(perf, null, "  "));

  browser.close();
};
