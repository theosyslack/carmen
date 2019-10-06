import {
  MissionReport,
  MissionStatus,
  Mission,
  MissionResult
} from "../types/carmen";
import { writeObjectToFile } from "./file";

const createMissionReport = (
  name: string,
  path: string,
  status: MissionStatus = "IN QUEUE",
  { result, context }: MissionResult
): MissionReport => {
  const timestamp = new Date();
  const fullPath = path + "report.json";
  const writtenReport = {
    name,
    path,
    status,
    timestamp,
    result
  };

  const fullReport = Object.assign({}, writtenReport, { context });

  writeObjectToFile(fullPath, writtenReport);

  return fullReport;
};

const onMissionSuccess = (name: string, path: string, result: MissionResult) =>
  createMissionReport(name, path, "SUCCESS", result);

const onMissionFailure = (name: string, path: string, { message }: Error) => {
  switch (message) {
    case "Protocol error (Page.navigate): Cannot navigate to invalid URL":
      return createMissionReport(name, path, "FAILURE", {
        result: { error: `Not a valid URL.` },
        context: {}
      });
    default:
      return createMissionReport(name, path, "FAILURE", {
        result: { error: message },
        context: {}
      });
  }
};

export const createMission = (
  name: string = "Generic Mission",
  path: string = "./reports/Generic",
  callback: () => Promise<MissionResult>
): Mission => {
  return (...args) => {
    return callback(...args)
      .then(result => onMissionSuccess(name, path, result))
      .catch(error => onMissionFailure(name, path, error));
  };
};
