import { MissionResult, MissionStatus, Mission } from "../types/carmen";

const createMissionReport = (
  status: MissionStatus = "IN QUEUE",
  payload = {}
): MissionResult => {
  return {
    status,
    payload
  };
};

export const createMission = (callback: () => Promise<object>): Mission => {
  return (...args) =>
    callback(...args)
      .then(payload => createMissionReport("SUCCESS", payload))
      .catch(error => createMissionReport("FAILURE", { error }));
};
