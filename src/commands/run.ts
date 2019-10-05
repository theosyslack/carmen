import { Mission } from "../types/carmen";
import close from "./close";

const run = async (missions: Mission[]) => {
  await Promise.all(
    missions.map(async mission => {
      const result = await mission();
      console.table(result);
      return result;
    })
  );
  await close();
};

export default run;
