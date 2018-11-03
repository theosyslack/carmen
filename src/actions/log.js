import chalk from "chalk";

const { log, table, clear } = console;

const LOG_TYPES = {
  table: message => table(message),
  success: message => log(chalk.green(message)),
  pending: message => log(chalk.yellow(message)),
  error: message => log(chalk.red(message))
};

export { clear };
export default (message, type = false) => {
  if (!type) {
    log(message);
  } else {
    const styledLog = LOG_TYPES[type];
    if (!styledLog) throw new Error("No style found");

    styledLog(message);
  }
};
