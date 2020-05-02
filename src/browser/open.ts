import { launch, Browser, LaunchOptions } from 'puppeteer';

let browser: Browser;

const open = async (options?: LaunchOptions): Promise<Browser> => {
  if (browser) return browser;

  browser = await launch(options)
  return browser
}

export default open