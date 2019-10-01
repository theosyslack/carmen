import missions from "../missions";
import { MissionName, Mission } from "../types/carmen";

export const getMissionName = (mission: Mission) => {
  if (typeof mission === "string") return mission;
  return mission.name || "[unnamedMission]";
};

export const getMissionFromName = (
  missionName: MissionName | Mission
): Mission => {
  if (typeof missionName === "function") {
    return missionName;
  } else {
    const defaultMission = async () => {};
    return missions[missionName] || defaultMission;
  }
};
