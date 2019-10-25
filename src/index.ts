import run from "./commands/run";
import missions from "./missions";
import getEventEmitter from "./events/getEvents";
import { Carmen } from '..';


const { version } = require("../package.json");
const events = getEventEmitter();


export {
  run,
  missions,
  events,
  version
}


export default {
  run, missions, events, version
} as Carmen
