import {
  MissionReport,
  MissionStatus,
  Mission,
  MissionResult
} from "../types/carmen";

const createMissionReport = (
  name: string,
  status: MissionStatus = "IN QUEUE",
  result: MissionResult
): MissionReport => {
  const timestamp = new Date();

  const report = {
    name,
    status,
    timestamp,
    result
  };

  return report;
};

export const createMission = (
  name: string = "Generic Mission",
  callback: () => Promise<object>
): Mission => {
  return (...args) => {
    return callback(...args)
      .then(result => createMissionReport(name, "SUCCESS", result))
      .catch(({ code, message }) => {
        switch (message) {
          case "Protocol error (Page.navigate): Cannot navigate to invalid URL":
            return createMissionReport(name, "FAILURE", {
              error: `Not a valid URL.`
            });
          default:
            return createMissionReport(name, "FAILURE", {
              error: message
            });
        }
      });
  };
};
