import run from "./commands/run";
import saveScreenshot from "./missions/saveScreenshot";
import compareScreenshots from "./missions/compareScreenshots";
import * as file from "./helpers/file";
import * as log from "./helpers/log";

const missions = {
  saveScreenshot,
  compareScreenshots
};

const helpers = {
  file,
  log
};

export { run, missions, helpers };
