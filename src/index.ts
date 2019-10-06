import run from "./commands/run";
import saveScreenshot from "./missions/saveScreenshot";
import compareScreenshots from "./missions/compareScreenshots";

const missions = {
  saveScreenshot,
  compareScreenshots
};

export { run, missions };
