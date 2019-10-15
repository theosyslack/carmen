import { MissionConfig, MissionPayload } from "../types/carmen";
import * as compare from "resemblejs/compareImages";
import { writeToNewFile } from "../helpers/file";
import takeScreenshot from "../sleuths/takeScreenshot";

const name = "Compare Screenshots";
const pathBase = "./reports/CompareScreenshots/";

export interface CompareScreenshotsConfiguration {
  buffers: [Buffer, Buffer];
  urls: [string, string];
  path?: string;
}

export const compareScreenshots = ({
  buffers,
  urls,
  path = pathBase + Date.now() + "/"
}: CompareScreenshotsConfiguration): MissionConfig => {
  const hasBuffers = buffers && buffers.length === 2;
  const hasUrls = urls && urls.length === 2;

  return {
    name,
    path,
    mission: async ({ browser, log, report }: MissionPayload) => {
      let first, second: Buffer;

      if (hasBuffers && hasUrls) {
        log(
          "You passed in buffers and urls. If we ran both, one would just overwrite the other. Defaulting to the URLs.",
          "warning"
        );
      }

      if (hasUrls) {
        [first, second] = await Promise.all(
          urls.map(async url => {
            const page = await browser.newPage();
            await page.goto(url);
            const screenshot = await takeScreenshot({ page });
            await page.close();
            return screenshot;
          })
        );
      } else if (hasBuffers) {
        [first, second] = buffers;
      }

      const comparison = await compare(first, second, {
        outputDiff: true
      });

      const diffImage = await comparison.getBuffer();

      const {
        isSameDimensions,
        dimensionDifference,
        misMatchPercentage,
        analysisTime
      } = comparison;

      await writeToNewFile(path + "diff.png", diffImage);
      await writeToNewFile(path + "first.png", first);
      await writeToNewFile(path + "second.png", second);

      const data = {
        hasBuffers,
        hasUrls,
        urls,
        isSameDimensions,
        dimensionDifference,
        misMatchPercentage,
        analysisTime
      };

      return await report.update({ status: "SUCCESS", payload: data });
    }
  };
};

export default compareScreenshots;
