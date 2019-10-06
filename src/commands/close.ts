import log from "../helpers/log";
import { getBrowser } from "../state/Browser";

const close = async () => {
  const browser = await getBrowser();
  //TODO: Avoid closing when pages are still running
  await browser.close();
  log("Browser closed.", "info");
  return;
};

export default close;
