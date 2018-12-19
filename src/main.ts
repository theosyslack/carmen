import chalk from "chalk";
import log, { globe } from "./actions/log";
const main = async (args: string[]) => {
  const [action] = args;

  switch (action) {
    default:
      globe();
      break;
  }
};

main(process.argv.splice(2));
