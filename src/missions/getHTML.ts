import * as puppeteer from "puppeteer";
import log from "../actions/log";
import { __ } from "ramda";
import { writeToNewFile } from "../actions/file";
import { createFolderPathFromUrl } from '../common/utilities';

export default async (page: puppeteer.Page) => {
  log("Getting HTML of the page...", "pending");
  const url = await page.url();
  const folderPath = createFolderPathFromUrl(url);
  const filePath =  'reports/getHTML/'+ folderPath + 'index.html';
  const html = await page.$eval('html', (html) => html.outerHTML)

  await writeToNewFile(filePath, html)
};
