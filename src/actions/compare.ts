import { write, read, createFolderForFile, writeReport } from "./file";

import compare from "resemblejs/compareImages";
import log from "./log";
import inquirer from "inquirer";
import { parse } from "path";

const askForOutputPathName = async (): Promise<string> => {
  const { outputPath } = await inquirer.prompt([
    {
      name: "outputPath",
      message: "What would you like to name this comparison?",
      type: "input"
    }
  ]);
  return outputPath;
};

export const compareImages = async (
  firstImagePath: string = "./tests/1.png",
  secondImagePath: string = "./tests/2.png",
  outputPath?: string
) => {
  // const common = difference(
  //   secondImagePath.split("/"),
  //   firstImagePath.split("/")
  // );
  // console.log(common);
  // return;

  if (!outputPath) {
    outputPath = await askForOutputPathName();
  }

  const finalPath = `./carmen-reports/compare/${outputPath}`;
  await createFolderForFile(`${finalPath}/image1.png`);
  log(`Created ${finalPath}.`, "pending");
  const [firstImage, secondImage] = [firstImagePath, secondImagePath].map(
    path => read(path)
  );
  log(`Read ${firstImagePath}`, "pending");

  log(`Read ${secondImagePath}`, "pending");

  await write(`${finalPath}/image1.png`, await firstImage);
  await write(`${finalPath}/image2.png`, await secondImage);
  log(`Wrote ${finalPath}/image1.png`, "success");
  log(`Wrote ${finalPath}/image2.png`, "success");

  const comparison = await compare(await firstImage, await secondImage, {
    outputDiff: true
  });

  log(
    `Comparison Complete! | ${firstImagePath} ${secondImagePath} ${outputPath}`,
    "success"
  );

  let { name } = parse(firstImagePath);

  await writeReport("compare", comparison, `${outputPath}/${name}.json`);
  await write(`${finalPath}/${name}.png`, comparison.getBuffer());
};
