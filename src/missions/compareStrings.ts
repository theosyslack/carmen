import { MissionConfig, MissionPayload } from "../..";
// import { writeToNewFile } from "../helpers/file";
import getMetaDescription from "../sleuths/getMetaDescription";

const name = "Compare Meta Descriptions";
const pathBase = "./reports/MetaDescriptions/";

export interface CompareConfiguration {
  urls: [string, string];
  path?: string;
}

export const compareStrings = ({
  urls,
  path = pathBase + Date.now() + "/"
}: CompareConfiguration): MissionConfig => {
  return {
    name,
    path,
    mission: async ({ browser }: MissionPayload) => {
      let first: string, second: string;

      [first, second] = await Promise.all(
        urls.map(async url => {
          const page = await browser.newPage();
          await page.goto(url);
          const description = await getMetaDescription({ page });
          await page.close();
          return description;
        })
      );

      const comparison = (first: string, second: string) => {
        if (first === second) {
          return true;
        }
        return false;
      };

      const result: boolean = comparison(first, second);

      const data = {
        urls,
        result
      };

      return data;
    }
  };
};

export default compareStrings;
