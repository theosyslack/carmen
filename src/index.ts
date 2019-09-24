import missions from "./missions";
import { createReportWriter, createFolderPathFromUrl } from "./actions/file";
import program from "./initializers/program";

const main = async () => {
  program.initialize();
};

const helpers = {
  createReportWriter,
  createFolderPathFromUrl
};

export { missions, helpers };

main();
