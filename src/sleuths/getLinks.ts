import { SleuthConfig } from "../types/carmen";
import { uniq } from "ramda";

async function getLinks({ page }: SleuthConfig) {
  const LOCAL_URLS_SELECTOR = "a";

  const links = await page.$$eval(
    LOCAL_URLS_SELECTOR,
    (links: HTMLLinkElement[]) => links.map(link => link.href)
  );

  return uniq(links.filter(link => link !== ""));
}

export default getLinks;
