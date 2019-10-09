import { Browser, LaunchOptions, launch } from "puppeteer";
import { isUndefined } from "util";
import log from "../helpers/log";

let browser: Browser;

const defaultOptions: LaunchOptions = {
  devtools: false
};

export const getBrowser = async (options?: LaunchOptions): Promise<Browser> => {
  if (isUndefined(browser) && isUndefined(options)) {
    log("Browser: Created With Default Options", "info");
    browser = await launch(defaultOptions);
  } else if (isUndefined(browser)) {
    log("Browser: Created with custom options", "info");
    console.table(options);
    browser = await launch(defaultOptions);
  }

  browser.on("targetcreated", () => log("Browser: targetcreated", "info"));
  browser.on("disconnected", () => log("Browser: disconnected", "info"));
  browser.on("targetchanged", () => log("Browser: targetchanged", "info"));
  browser.on("targetdestroyed", () => log("Browser: targetdestroyed", "info"));

  return await browser;
};
