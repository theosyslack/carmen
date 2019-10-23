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
  const shouldMakeNewBrowser = !isBrowserAvailable() && isUndefined(options);
  const shouldMakeNewBrowserWithCustomOptions =
    !isBrowserAvailable() && !isUndefined(options);

  if (shouldMakeNewBrowser) {
    log("Browser: Created With Default Options", "info");
    browser = await launch(defaultOptions);
    establishBrowserEvents(browser);
  } else if (shouldMakeNewBrowserWithCustomOptions) {
    log("Browser: Created with custom options", "info");
    console.table(options);
    browser = await launch(options);
    establishBrowserEvents(browser);
  }

  return await browser;
};
