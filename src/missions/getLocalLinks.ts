import { writeReport } from "../actions/file";
import { uniq } from "ramda";
import { Page } from "puppeteer";

async function getLocalLinks(page: Page) {
  const LOCAL_URLS_SELECTOR = 'a[href^="/"]';

  const links = await page.$$eval(
    LOCAL_URLS_SELECTOR,
    (links: HTMLLinkElement[]) => links.map(link => link.href)
  );

  writeReport("local-links", uniq(links));
}

export default getLocalLinks;
