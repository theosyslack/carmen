import { write, read } from "./file";
import compare from "resemblejs/compareImages";
import log from "./log";

export const compareImages = async (
  firstImagePath: string = "./tests/1.png",
  secondImagePath: string = "./tests/2.png",
  outputPath: string = "./tests/3-diff.png"
) => {
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

  await write(outputPath, result.getBuffer());
};
