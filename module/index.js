import fs from 'fs';
import puppeteer from "puppeteer";
import compareScreenshots from './actions/compareScreenshots.js'
import setViewport from './actions/setViewport.js'
import waitForLoading from './actions/waitForLoading.js';
import takeScreenshot from './actions/takeScreenshot.js'
import changeText from './actions/changeText.js'
import goTo from './actions/goTo.js'

const run = async (actions, {saveResult = false} = {}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let config = {
    browser,
    page,
    context: {},
  };

  if (typeof actions === "function") {
    const result = await actions(config);
    config = Object.assign({}, config, result);
    browser.close()
    return config
  }

  for (const action of actions) {
    const result = await action(config);
    config = Object.assign({}, config, result);
  }

  if (saveResult) {
    fs.writeFileSync(`carmen-result-${Date.now()}.json`, JSON.stringify(config.context, null, 2))
  }

  browser.close();
  return config
};

export const actions = {
  compareScreenshots,
  waitForLoading,
  takeScreenshot,
  setViewport,
  changeText,
  goTo
}


export default {
  run
}