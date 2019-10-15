import { MissionReport } from "../types/carmen";

export const createBlankReport = (): MissionReport => {
  const timestamp = new Date();
  return {
    timestamp,
    status: "PENDING",
    payload: {}
  };
};
