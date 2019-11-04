import { Runnable } from "../..";
import uuid from "uuid/v1";
import remove from "ramda/es/remove";

export type QueuePriority = 0 | 1 | 2 | 3 | 4 | 5;
export type TaskId = string;

interface QueueOptions {
  priority: QueuePriority;
}

interface Task<T> {
  id: TaskId;
  priority: QueuePriority;
  callback: Runnable<T>;
}

export default class Queue<T> {
  private tasks: Task<T>[];

  private __createTask(callback: Runnable<T>, options: QueueOptions): Task<T> {
    return {
      id: uuid(),
      callback,
      ...options
    };
  }

  findTask(id: TaskId) {
    return this.tasks.find(task => task.id === id);
  }

  addTask(callback: Runnable<T>, options: QueueOptions): TaskId {
    const task = this.__createTask(callback, options);
    this.tasks = [...this.tasks, task];
    return task.id;
  }

  removeTask(id: TaskId) {
    const index = this.tasks.findIndex(task => task.id === id);
    remove(index, 1, this.tasks);
    return id;
  }

  getNextTask() {}

  async run() {}
}
