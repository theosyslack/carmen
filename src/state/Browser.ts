import { Browser, LaunchOptions, launch } from "puppeteer";
import { isUndefined } from "util";
import log from "../helpers/log";

let browser: Browser;

const defaultOptions: LaunchOptions = {
  devtools: false
};

const isBrowserAvailable = () => {
  return !isUndefined(browser) && browser.isConnected();
};

const establishBrowserEvents = (browser: Browser) => {
  browser.on("disconnected", () => log("Browser: disconnected", "info"));
};

export const getBrowser = async (options?: LaunchOptions): Promise<Browser> => {
  if (!isBrowserAvailable() && isUndefined(options)) {
    log("Browser: Created With Default Options", "info");
    browser = await launch(defaultOptions);
    establishBrowserEvents(browser);
  } else if (!isBrowserAvailable()) {
    log("Browser: Created with custom options", "info");
    console.table(options);
    browser = await launch(defaultOptions);
    establishBrowserEvents(browser);
  }

  return await browser;
};
