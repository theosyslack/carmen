import { Mission, missions } from "..";

export const getMissionName = (mission: Mission | string) => {
  if (typeof mission === "string") return mission;
  return mission.name || "[unnamedMission]";
};

export const getMissionFromName = (missionTitle): Mission => {
  if (typeof missionTitle === "function") {
    return missionTitle;
  } else {
    const defaultMission = () => {};
    return missions[missionTitle] || defaultMission;
  }
};
