import { EventEmitter } from "events";

let events: EventEmitter;

export const getEventEmitter = (): EventEmitter => {
  if (events) return events;
  events = new EventEmitter();
  return events;
};

export default getEventEmitter;
