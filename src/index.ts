// #!/usr/bin/env node
import { Page, Browser } from "puppeteer";
import missions from "./missions";
import { createReportWriter, createFolderPathFromUrl } from "./actions/file";
import program from "./initializers/program";

export type Mission = (page: Page, browser?: Browser) => any;
export type Destination = {
  url: string;
  missions: [string | Mission];
};

export type TravelPlan = {
  destinations: Destination[];
};

const main = async () => {
  program.initialize();
};

const helpers = {
  createReportWriter,
  createFolderPathFromUrl
};

export { missions, helpers };

main();
