import { pick } from "ramda";
import * as path from "path";

export const createFolderPathFromUrl = (urlLike: URLLike) => {
  const { hostname, pathname } = createURLFromURLLike(urlLike);
  let folderPath = "";
  const extension = path.extname(pathname);

  if (extension === "") {
    folderPath = path.join(hostname, pathname);
  } else {
    folderPath = path.join(hostname, pathname.replace(extension, ""));
  }
  return path.posix.normalize(folderPath);
};

export const getPropertiesFromUrl = (
  urlLike: URLLike,
  properties: string[]
) => {
  const url = createURLFromURLLike(urlLike);

  return pick(properties, url);
};

export const createURLFromURLLike = (urlLike: URLLike): URL => {
  if (urlLike instanceof URL) {
    return urlLike;
  } else {
    return createURLFromString(urlLike);
  }
};

export const createURLFromString = (string: string): URL => {
  try {
    return new URL(string);
  } catch {
    throw new Error(`"${string}" is not a URL.`);
  }
};
