import { Browser, LaunchOptions, launch } from "puppeteer";
import { isUndefined } from "util";
import log from "../helpers/log";

let browser: Browser;

const defaultOptions: LaunchOptions = {
  devtools: false
};

export const getBrowser = async (options?: LaunchOptions): Promise<Browser> => {
  if (isUndefined(browser) && isUndefined(options)) {
    log("Creating Browser with default options", "pending");
    browser = await launch(defaultOptions);
  } else if (isUndefined(browser)) {
    log("Creating Browser with custom options");
    console.table(options);
    browser = await launch(defaultOptions);
  }

  return await browser;
};
