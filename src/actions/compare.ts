import { write, read, createFolderForFile } from "./file";
import compare from "resemblejs/compareImages";
import log from "./log";
import inquirer from "inquirer";
// import autocomplete from "inquirer-autocomplete-prompt";
import fuzzyPath from "inquirer-fuzzy-path";

const askForImagePaths = async (first?, second?, output?) => {
  console.log(process.cwd());
  return;
  return await inquirer.prompt([
    {
      type: "fuzzypath",
      name: "first",
      message: "What's the first file path?",
      default: process.cwd()
    },
    {
      type: "fuzzypath",
      name: "second",
      message: "What's the second file path?",
      default: process.cwd()
    },
    {
      type: "fuzzypath",
      name: "output",
      message: "What's the output path?",
      default: process.cwd()
    }
  ]);
};

export const compareImages = async (
  firstImagePath: string = "./tests/1.png",
  secondImagePath: string = "./tests/2.png",
  outputPath: string = "./tests/3-diff.png"
) => {
  inquirer.registerPrompt("fuzzypath", fuzzyPath);
  const { first, second, output } = await askForImagePaths();
  console.log({ first, second, output });
  // console.log(firstImagePath, secondImagePath, outputPath);
  // return;

  const [firstImage, secondImage] = [firstImagePath, secondImagePath].map(
    path => read(path)
  );

  const result = await compare(await firstImage, await secondImage, {
    outputDiff: true
  });

  log(
    `Comparison Complete! | ${firstImagePath} ${secondImagePath} ${outputPath}`
  );

  await createFolderForFile(outputPath);
  await write(outputPath, result.getBuffer());
};
