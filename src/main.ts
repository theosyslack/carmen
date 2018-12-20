import takeScreenshot from "./missions/takeScreenshot";

const main = async (args: string[]) => {
  const [action, pathToTravelPlan] = args;
  console.clear();
  console.log(action, pathToTravelPlan);
  switch (action) {
    default:
      const { default: travelPlan } = await import(pathToTravelPlan);
      console.table(travelPlan);
      break;
  }
};

main(process.argv.splice(2));
