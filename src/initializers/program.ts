import program, { CommanderStatic } from "commander";
import findTravelPlan from "../scripts/findTravelPlans";
import followTravelPlan from "../scripts/followTravelPlan";
import createDefaultTravelPlan from "../scripts/createDefaultTravelPlan";
import log from "../actions/log";
import { compareImages } from "../actions/compare";

const follow = async (
  travelPlanPath = "./travel-plan.js",
  program: CommanderStatic
) => {
  const plan = await findTravelPlan(travelPlanPath);
  if (!plan) {
    process.exit(1);
  } else {
    followTravelPlan(plan, program);
  }
};

const initialize = async () => {
  const { version } = require("../../package.json");

  program.name("carmen");
  program.version(version);
  program.option("-d, --debug", "Output options for easier debugging.");

  program
    .command("init")
    .description("Create a travel plan.")
    .action(createDefaultTravelPlan);

  program
    .command("follow [travelPlan]", { isDefault: true })
    .description("Follow a travel plan.")
    .action(follow);

  program
    .command("compare [firstImage] [secondImage] [outputPath]", {
      isDefault: true
    })
    .description(
      "Compare firstImage to secondImage, and create a third image that is the difference between the two."
    )
    .action(compareImages);

  program.parse(process.argv);

  if (program.debug) {
    log(JSON.stringify(program.opts()), "success");
    return;
  }

  if (!program.args) follow(null, program);

  return program;
};

export default { initialize };
