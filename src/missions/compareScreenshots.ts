import { Mission } from "../types/carmen";
import { createMission } from "../helpers/mission";

export const compareScreenshots = (
  firstImage: Buffer,
  secondImage: Buffer
): Mission => {
  return createMission("Compare Screenshots", async () => {
    return {};
  });
};
