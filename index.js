import puppeteer from "puppeteer";
import takeScreenshot from './actions/takeScreenshot.js'

const run = async (actions) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let config = {
    browser,
    page,
    context: {},
  };

  for (const action of actions) {
    const result = await action(config);
    config = Object.assign({}, config, result);
  }

  await browser.close();
};

export const actions = {
  takeScreenshot
}


export default {
  run
}