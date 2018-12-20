/*
  Sleuth runs your missions, doesn't get tired.
*/

// generate new Sleuth
export function sendSleuth(missions: any[], destination: string) {
  return {
    [Symbol.asyncIterator]: async function*() {
      let missionIndex: number = 0;
      let results: any[];
      while (missionIndex < missions.length) {
        const missionResults: object[] = await runMission(
          missions[missionIndex],
          destination
        );

        for await (const result of missionResults) {
          results.push(yield result);
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
