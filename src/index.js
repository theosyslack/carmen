import "babel-polyfill"; // So we can support async.

import { initialize as initializeBrowser } from "./actions/scan";
import * as file from "./actions/file";
import log from "./actions/log";
import queue from "./actions/queue";
import scan, { loginToMagnolia } from "./actions/scan";

let urls = [];
const main = async () => {
  const browser = await initializeBrowser();
  const hasURLFile = await file.doesExist("urls.json");

  if (hasURLFile) {
    const json = await file
      .getContents("urls.json")
      .then(text => JSON.parse(text));
    urls = json.urls;
  }

  log(`${urls.length} found.`);

  await loginToMagnolia();

  urls.slice(0, 5).forEach(url =>
    queue.add(async () => {
      await scan(url);
    }, url)
  );

  // queue.onIdle(() => {
  //   // await browser.close();
  // });
};

main();
