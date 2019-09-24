
import pick from "ramda/es/pick";

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

export const createURLFromString = (string): URL => {
  try {
    return new URL(string);
  } catch {
    throw new Error(`"${string}" is not a URL.`);
  }
};
