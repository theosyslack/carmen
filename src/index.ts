import run from "./commands/run";
import missions from "./missions";
import getEventEmitter from "./events/getEvents";

const { version } = require("../package.json");

const events = getEventEmitter();

export { run, missions, version, events };
