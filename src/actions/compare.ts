import * as resemblejs from "resemblejs";
import { resolve as resolvePath } from "path";
import { write } from "./file";
import log from "./log";

export const compareImages = async (
  imageOneRelativeFilePath: string = "johnsonville-1.png",
  imageTwoRelativeFilePath: string = "johnsonville-2.png",
  outputRelativePath: string = "diff.png"
) => {
  const rootPath = process.cwd();
  const imageOnePath = resolvePath(rootPath, imageOneRelativeFilePath);
  const imageTwoPath = resolvePath(rootPath, imageTwoRelativeFilePath);

  log("Comparing", "pending");
  log(`${imageOneRelativeFilePath} | ${imageTwoRelativeFilePath}`, "pending");

  await resemblejs(imageOnePath)
    .compareTo(imageTwoPath)
    .onComplete(async data => {
      log("Comparison complete!", "success");
      return await write(outputRelativePath, await data.getBuffer());
    });
};
