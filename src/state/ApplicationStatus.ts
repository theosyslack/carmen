import { Machine, interpret, StateMachine } from "xstate";
import { isUndefined } from "util";

let getApplicationStatus: StateMachine<any, any, any>;

const getgetApplicationStatus = () => {
  if (isUndefined(getApplicationStatus)) {
    getApplicationStatus = Machine({
      id: "getApplicationStatus",
      initial: "inactive",
      context: {
        counts: {
          completed: 0,
          pending: 0
        }
      },
      states: {
        done: { on: { STATUS: "done" } },
        active: { on: { STATUS: "active" } }
      }
    });
  }

  return getApplicationStatus;
};

export const getgetApplicationStatusService = () => {
  const state = getgetApplicationStatus();

  return interpret(state);
};
