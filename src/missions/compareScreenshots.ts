import { Mission, MissionResult } from "../types/carmen";
import { createMission } from "../helpers/mission";
import * as compare from "resemblejs/compareImages";
import { writeToNewFile } from "../helpers/file";
import log from "../helpers/log";
import { getBrowser } from "../state/Browser";
import takeScreenshot from "../sleuths/takeScreenshot";

const missionName = "Compare Screenshots";
const pathBase = "./reports/CompareScreenshots/";

type BufferComparison = [Buffer, Buffer];

type URLComparison = [string, string];

type Comparisons = {
  buffers: BufferComparison;
  urls: URLComparison;
};

export const compareScreenshots = (
  name: string,
  comparisons: Comparisons
): Mission => {
  const path = pathBase + name + "/";
  const { buffers, urls } = comparisons;
  const hasBuffers = buffers && buffers.length === 2;
  const hasUrls = urls && urls.length === 2;
  if (hasBuffers && hasUrls) {
    log(
      "You passed in buffers and urls. If we ran both, one would just overwrite the other. Defaulting to the URLs.",
      "warning"
    );
  }
  return createMission(
    missionName,
    path,
    async (): Promise<MissionResult> => {
      let first, second: Buffer;

      if (hasUrls) {
        const browser = await getBrowser();
        [first, second] = await Promise.all(
          urls.map(async url => {
            const page = await browser.newPage();
            await page.goto(url);
            const screenshot = takeScreenshot({ page });
            page.close();
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

      return {
        result: {
          data: {
            hasBuffers,
            hasUrls,
            urls,
            isSameDimensions,
            dimensionDifference,
            misMatchPercentage,
            analysisTime
          }
        },
        context: {
          firstImage: first,
          secondImage: second,
          diffImage,
          hasBuffers,
          hasUrls,
          urls,
          buffers,
          isSameDimensions,
          dimensionDifference,
          misMatchPercentage,
          analysisTime
        }
      };
    }
  );
};

export default compareScreenshots;
