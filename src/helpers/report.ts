import { MissionReport, MissionConfig } from "../..";

export const createBlankReport = (config?: MissionConfig): MissionReport => {
  const timestamp = new Date();
  return {
    timestamp,
    config,
    status: "PENDING",
    payload: {}
  };
};
