import { MissionReport, MissionConfig, FileConnection } from "../types/carmen";
import { createMission } from "../helpers/mission";
import { createFolderPathFromUrl } from "../helpers/file";
import { invert } from "ramda";
import log from "../helpers/log";
import getLinks from "../sleuths/getLinks";
import axios from "axios";

const missionName = "Find Broken Links";
const pathBase = "./reports/FindBrokenLinks/";

interface FindBrokenLinksMissionConfiguration {
  url: string;
}

interface StatusCollection {
  [status: string]: string[];
}

interface LinkCollection {
  [link: string]: string;
}

let history: LinkCollection = {};

const isHTTPStatusGood = (status: number | string) => {
  if (typeof status === "string") {
    status = parseInt(status, 10);
  }
  return status >= 200 && status < 400;
};

const getStatusForLink = async (link: string): Promise<string> => {
  if (typeof link !== "string") return "INVALID ENTRY";
  if (history[link]) {
    const status = history[link];
    log(
      `[FROM HISTORY] ${status} ${link}`,
      isHTTPStatusGood(status) ? "info" : "error"
    );
    return status;
  } else {
    const { status } = await axios.get(link).catch(error => {
      if (error.response) {
        return {
          status: error.response.status
        };
      } else if (error.request) {
        return {
          status: "NO RESPONSE"
        };
      } else {
        return {
          status: "UNKNOWN ERROR"
        };
      }
    });
    history[link] = status;
    log(`${status} ${link}`, isHTTPStatusGood(status) ? "info" : "error");
    return status;
  }
};

const checkLinksSequentially = async (
  links: string[],
  report: FileConnection<MissionReport>
): Promise<StatusCollection> => {
  let result = {};

  await report.update({ payload: { all: links } });

  for (const link of links) {
    const status = await getStatusForLink(link);

    result = Object.assign({}, result, {
      [link]: status
    });
  }

  await report.update({ payload: invert(result) });

  return invert(result);
};

export const findBrokenLinks = ({
  url
}: FindBrokenLinksMissionConfiguration): MissionConfig => {
  const path = pathBase + createFolderPathFromUrl(url);

  return {
    name: missionName,
    path,
    url,
    mission: async ({ browser, log, page, report }) => {
      const links = await getLinks({ page });
      await page.close();
      const linksByStatus = await checkLinksSequentially(links, report);
      const statuses = Object.keys(linksByStatus);
      const counts = statuses.reduce((acc, status) => {
        const count = linksByStatus[status].length;
        return Object.assign({}, acc, {
          [status]: count
        });
      }, {});
      const payload = {
        statuses,
        counts,
        ...linksByStatus
      };

      return report.update({ status: "SUCCESS", payload });
    }
  };
};

export default findBrokenLinks;
