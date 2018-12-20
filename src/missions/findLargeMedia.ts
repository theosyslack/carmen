// export default async (page: Page) => {
//
// }

import * as puppeteer from "puppeteer";

const sizeLimit = 2000000;

const findLargeMedia = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('response', response => {
        let resourceType = response.request().resourceType();
        if (resourceType == "image" || resourceType == "media") {
            let contentLength = response.headers()['content-length'];
            if (typeof contentLength != "undefined" && contentLength >= sizeLimit) {
                console.error(contentLength + " :: " + response.url());
            }
        }
    });
    await page.goto('https://retail.johnsonville.com');
    await browser.close();
};

findLargeMedia();