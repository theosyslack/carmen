import run from "./commands/run";
import missions from "./missions";
import getEventEmitter from "./events/getEvents";


const version: string = require("../package.json").version;
const events = getEventEmitter();

const carmen = {
  run, missions, events, version
}


export {
  run, missions, events, version
}

export default carmen