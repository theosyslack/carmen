// export default async (page: Page) => {
//
// }

import * as puppeteer from "puppeteer";

export default async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://retail.johnsonville.com', {waitUntil: 'networkidle2'});
    await browser.close();
};