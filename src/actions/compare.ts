import { write, read, createFolderForFile, writeReport } from "./file";
import compare from "resemblejs/compareImages";
import log from "./log";
import inquirer from "inquirer";
import { parse } from "path";

const askForOutputPathName = () => {
  return inquirer.prompt([
    {
      name: "outputPath",
      message: "What would you like to name this comparison?",
      type: "input"
    }
  ]);
};

export const compareImages = async (
  firstImagePath: string = "./tests/1.png",
  secondImagePath: string = "./tests/2.png"
) => {
  let { name } = parse(firstImagePath);
  let { outputPath } = await askForOutputPathName();

  const [firstImage, secondImage] = [firstImagePath, secondImagePath].map(
    path => read(path)
  );

  const result = await compare(await firstImage, await secondImage, {
    outputDiff: true
  });

  log(
    `Comparison Complete! | ${firstImagePath} ${secondImagePath} ${outputPath}`
  );

  await createFolderForFile(`./carmen-reports/compare/${outputPath}`);
  await writeReport("compare", result, `${outputPath}/${name}.json`);
  await write(
    `./carmen-reports/compare/${outputPath}/${name}.png`,
    result.getBuffer()
  );
};
