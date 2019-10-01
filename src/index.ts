import missions from "./missions";
import {
  createFolderPathFromUrl,
  createReportWriter,
  getContentsAsObject,
  writeReport
} from "./actions/file";
import program from "./initializers/program";
import { carmen } from "..";

const main = async (): Promise<void> => {
  program.initialize();
};

const helpers = {
  writeReport,
  createReportWriter,
  createFolderPathFromUrl,
  getContentsAsObject
};

const returns = { missions, helpers };

export default returns;

main();
