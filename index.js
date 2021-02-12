import puppeteer from "puppeteer";
import compareScreenshots from './actions/compareScreenshots.js'
import takeScreenshot from './actions/takeScreenshot.js'
import changeText from './actions/changeText.js'
import goTo from './actions/goTo.js'

const run = async (actions) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let config = {
    browser,
    page,
    context: {},
  };

  if (typeof actions === "function") {
    const result = await actions(config);
    browser.close()
    return result
  }

  for (const action of actions) {
    const result = await action(config);
    config = Object.assign({}, config, result);
    console.log(action.name)
  }

  await browser.close();
};

export const actions = {
  compareScreenshots,
  takeScreenshot,
  changeText,
  goTo
}


export default {
  run
}