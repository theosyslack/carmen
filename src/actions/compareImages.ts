import * as fs from "mz/fs";
import * as resemblejs from "resemblejs";
import * as path from "path";
import log from "./log";

const options = {
  output: {
    errorColor: {
      red: 255,
      green: 0,
      blue: 255
    },
    errorType: "movement",
    transparency: 0.3,
    largeImageThreshold: 1200,
    useCrossOrigin: false,
    outputDiff: true
  },
  scaleToSameSize: true,
  ignore: "antialiasing"
};

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

  console.log(imageOnePath);
  console.log(imageTwoPath);

  await resemblejs(imageOnePath)
    .compareTo(imageTwoPath)
    .ignoreColors()
    .onComplete(async data => {
      await saveResults(data);
    });
};

compareImagesInternal();
