import * as puppeteer from "puppeteer";
import { writeToNewFile } from "../actions/file";
import { createFolderPathFromUrl } from "../common/utilities";

export default async function getHTML(page: puppeteer.Page) {
  const url = await page.url();
  const folderPath = createFolderPathFromUrl(url);
  const filePath = "reports/getHTML/" + folderPath + "index.html";
  const html = await page.$eval("html", html => html.outerHTML);

  await writeToNewFile(filePath, html);
}
