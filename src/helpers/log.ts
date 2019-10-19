import chalk from "chalk";
export type LogType =
  | "default"
  | "table"
  | "success"
  | "pending"
  | "error"
  | "info"
  | "warning";
export type Logger = (message: string) => void;
export type LoggerWithType = (message: string, type?: LogType) => void;
export type LogCollection = {
  [type in LogType]: Logger;
};
const { log, table, clear } = console;

const LOG_TYPES: LogCollection = {
  default: message => log(chalk.blue(message)),
  info: message => log(chalk.blue(`[INFO]    ${message}`)),
  table: message => table(message),
  success: message => log(chalk.green(`[SUCCESS] ${message}`)),
  pending: message => log(chalk.yellow(`[PENDING] ${message}`)),
  warning: message => log(chalk.magenta(`[WARNING] ${message}`)),
  error: message => {
    log(chalk.red(`[ERROR]   ${message}`));
  }
};

export { clear };

export const logWithType: LoggerWithType = (
  message: string,
  type?: LogType
): void => {
  if (!type) {
    log(message);
  } else {
    const styledLog = LOG_TYPES[type];
    if (!styledLog) throw new Error("No style found");

    styledLog(message);
  }
};

export default logWithType;
