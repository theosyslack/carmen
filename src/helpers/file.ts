import { join as joinPath, resolve as resolvePath, parse } from "path";
import { promisify } from "util";
import { curry } from "ramda";
import * as fs from "fs";
import log from "./log";

const DEFAULT_REPORT_PATH = `${Date.now().toString()}.json`;

////////////
/// Create

export const writeToNewFile = async (
  path: string,
  data: string | Buffer,
  writeOptions: fs.WriteFileOptions = {}
) => {
  await createFolderForFile(path);
  await write(path, data, writeOptions).catch(e => {
    log(`Failed to save file to: ${path} with error: ${e}`);
    return e;
  });
};

export const writeObjectToFile = curry(
  async (filePath: string = DEFAULT_REPORT_PATH, object: object) => {
    const resolvedPath = resolvePath(process.cwd(), filePath);

    const file = await writeToNewFile(
      resolvedPath,
      JSON.stringify(object, null, 2)
    );
    return file;
  }
);

export const createFolderForFile = async (filePath: string) => {
  let { dir } = parse(filePath);
  if (!dir) dir = filePath;

  return await mkdir(dir, { recursive: true }).catch(({ code }) => {
    if (code === "EEXIST") {
      log(`${dir} already exists.`, "error");
      return;
    }

    if (code === "EACCES") {
      log(`${dir} cannot be accessed.`, "error");
      return;
    }
  });
};

export const writeReport = async (
  reportType: string = "misc",
  content: string | object,
  filePath: string = DEFAULT_REPORT_PATH
) => {
  const finalPath = createPathForReport(reportType) + filePath;
  log(`Creating ${finalPath}`, "pending");
  await createFolderForFile(finalPath);
  if (typeof content === "object") {
    return writeObjectToFile(finalPath, content);
  } else {
    return write(finalPath, content);
  }
};

export const createPathForReport = (reportType: string) =>
  `./carmen-reports/${reportType}/`;

export const createReportWriter = (
  reportType: string,
  filePath: string = DEFAULT_REPORT_PATH
) => (content: object) => writeReport(reportType, content, filePath);

export const createFolderPathFromUrl = (url: string) => {
  const [urlWithoutParams] = url.split("?");
  const cleanUrl = urlWithoutParams
    .replace("http://", "")
    .replace("https://", "");
  return joinPath(cleanUrl, "/");
};

////////////
/// Read
export const getContents = async (path: string) => {
  const fullPath = joinPath(path);

  return await read(fullPath, { encoding: "utf-8" });
};

export const getContentsAsObject = async (path: string) =>
  JSON.parse(await getContents(path));

export const exists = async (path: string) => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(err => {
      return false;
    });
};

export const access = promisify(fs.access);
export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const write = promisify(fs.writeFile);
export const sanitize = (string: string) => {
  const regex = /[<>:"\/\\|?*\x00-\x1F]/g;
  return string.replace(regex, "-");
  //TODO: Write a sanitize function to make filename safe
};
