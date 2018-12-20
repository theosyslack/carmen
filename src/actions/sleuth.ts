/*
  Sleuth runs your missions, doesn't get tired.
*/

// generate new Sleuth
export function sendSleuth(missions: any[], destination: string) {
  return {
    [Symbol.asyncIterator]: async function*() {
      let missionIndex: number = 0;
      let results: any[] = [];
      while (missionIndex < missions.length) {
        try {
          const missionResults: object[] = await runMission(
            missions[missionIndex],
            destination
          );
          results.push(yield missionResults);
        } catch (error) {
          console.log(error);
        }
        missionIndex = missionIndex + 1;
      }
      return results;
    }
  };
}

// mission runner
export function runMission(mission: any, destination: string) {
  return mission(destination);
}
