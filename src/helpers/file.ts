import {
  join as joinPath,
  resolve as resolvePath,
  parse,
  ParsedPath
} from "path";
import { promisify } from "util";
import * as fs from "fs";
import log from "./log";
import { FileConnection, MissionReport } from "../..";
import { mergeDeepRight } from "ramda";

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

export const writeObjectToFile = async (
  filePath: string = DEFAULT_REPORT_PATH,
  object: object
) => {
  const resolvedPath = resolvePath(process.cwd(), filePath);

  const file = await writeToNewFile(
    resolvedPath,
    JSON.stringify(object, null, 2)
  );
  return file;
};

export const createFolderForFile = async (
  filePath: string
): Promise<ParsedPath> => {
  const parsedPath = parse(filePath);
  let { dir, ext } = parsedPath;
  if (!ext) dir = filePath;

  await mkdir(dir, { recursive: true }).catch(({ code }) => {
    if (code === "EEXIST") {
      log(`${dir} already exists.`, "error");
      return;
    }

    if (code === "EACCES") {
      log(`${dir} cannot be accessed.`, "error");
      return;
    }
  });

  return parsedPath;
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
  const { hostname, pathname, ...rest } = new URL(url);
  const [host, tld] = hostname.split(".");
  const test = host + "/" + tld + "/" + pathname + "/";
  const joined = joinPath(test);
  return joined;
};

////////////
/// Read
export const getContents = async (path: string) => {
  const fullPath = joinPath(path);

  return await read(fullPath, { encoding: "utf-8" });
};

export const getContentsAsObject = async (path: string): Promise<object> =>
  JSON.parse(await getContents(path));

export const exists = async (path: string) => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(err => {
      return false;
    });
};

export const stat = promisify(fs.stat);
export const access = promisify(fs.access);
export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const write = promisify(fs.writeFile);
export const sanitize = (string: string) => {
  const regex = /^[A-Za-z0-9]+/g;
  return string.replace(regex, "-");
  //TODO: Write a sanitize function to make filename safe
};

export const openFileConnection = async (
  path: string
): Promise<FileConnection<MissionReport>> => {
  if (!path) throw new Error("A path is required to open a file connection.");
  if (!path.endsWith("/"))
    throw new Error(`A path must end in a slash. You provided ${path}`);
  path = path + "report.json";
  await createFolderForFile(path);

  if (!(await exists(path))) {
    await writeToNewFile(path, "{}");
  }

  writeToNewFile;

  const { dir, name } = await parse(path);

  return {
    path,
    dir,
    name,
    exists: () => exists(path),
    read: () => getContentsAsObject(path),
    update: async update => {
      const base = {
        timestamp: new Date()
      };
      const content = await getContentsAsObject(path);
      const updated = mergeDeepRight(content, Object.assign({}, base, update));
      // TODO: use writeObjectToFile, once i figure out how to properly handle I/O ops in node
      fs.writeFileSync(path, JSON.stringify(updated, null, 2));
      // await writeObjectToFile(path, updated);
      return updated;
    },
    create: (name: string, data: object) => write(dir + "/" + name, data)
  };
};
