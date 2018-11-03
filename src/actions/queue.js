import PQueue from "p-queue";
import uniqid from "uniqid";
import log, { clear } from "./log";

class QueueClass {
  constructor() {
    this._queue = []; // Holds the async tasks to run
    this._complete = []; // Holds the names of the tasks have run
    this._pending = []; // Holds the names of the tasks that haven't run
  }
  enqueue(run, name) {
    this._queue.push(run);
    this._pending.push(name);
  }
  dequeue() {
    const completed = this._pending.pop();
    this._complete.push(completed);
    this.log();
    return this._queue.pop();
  }

  log() {
    const { complete, pending } = this.status;
    clear();
    log(pending.slice(-5).join("\n"), "pending");
    log(complete.length, "success");
    // log(complete.slice(0, -5).join("\n"), "success");
  }
  get status() {
    return {
      complete: this._complete,
      pending: this._pending
    };
  }
  get size() {
    return this._queue.length;
  }
}

const queue = new PQueue({ concurrency: 1, queueClass: QueueClass });

export default queue;
