import { join as joinPath, resolve as resolvePath, parse } from "path";
import { promisify } from "util";
import { curry } from "ramda";
import * as fs from "fs";
import log from "./log";
export const access = promisify(fs.access);
export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const write = promisify(fs.writeFile);
export const sanitize = string => {
  const regex = /[<>:"\/\\|?*\x00-\x1F]/g;
  return string.replace(regex, "-");
  //TODO: Write a sanitize function to make filename safe
};

////////////
/// Create

export const writeObjectToFile = curry(
  async (object: object, filePath: string) => {
    if (!filePath.endsWith(".json")) {
      filePath += ".json";
    }
    const resolvedPath = resolvePath(process.cwd(), filePath);
    await createFolderForFile(resolvedPath);
    log(`Saved ${filePath}`, "success");
    return await write(resolvedPath, JSON.stringify(object, null, 2)).catch(
      e => {
        log(`Failed to save file to: ${filePath} with error: ${e}`);
        return e;
      }
    );
  }
);

export const createFolderForFile = async (filePath: string) => {
  const { dir } = parse(filePath);
  return await mkdir(dir, { recursive: true }).catch(({ code }) => {
    if (code === "EEXIST") {
      // log(`${dir} already exists.`, "pending");
      return;
    }

    if (code === "EACCES") {
      // log(`${dir} cannot be accessed.`, "pending");
      return;
    }
  });
};

export const writeReport = (
  reportType: string = "misc",
  filePath: string = Date.now().toString(),
  object: object = {}
) => writeObjectToFile(object, `./reports/${reportType}/${filePath}`);

export const createReportWriter = (
  reportType: string,
  filePath: string
) => object => writeReport(reportType, filePath, object);

////////////
/// Read
export const getContents = async path => {
  const fullPath = joinPath(path);

  return await read(fullPath, { encoding: "utf-8" });
};

export const exists = async path => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(err => {
      return false;
    });
};

////////////
/// Update

////////////
/// Delete
