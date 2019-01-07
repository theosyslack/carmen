import * as fs from "mz/fs";
import * as resemblejs from "resemblejs";
import * as path from "path";

const saveResults = async data =>
  fs.writeFile("./output.png", data.getBuffer());

const compareImagesInternal = async (
  imageOneRelativeFilePath: string = "johnsonville-1.png",
  imageTwoRelativeFilePath: string = "johnsonville-2.png",
  outputRelativePath: string = "diff.png"
) => {
  const rootPath = process.cwd();
  const imageOnePath = path.resolve(rootPath, imageOneRelativeFilePath);
  const imageTwoPath = path.resolve(rootPath, imageTwoRelativeFilePath);

  await resemblejs(imageOnePath)
    .compareTo(imageTwoPath)
    .ignoreColors()
    .onComplete(async data => {
      await saveResults(data);
    });
};

compareImagesInternal();
