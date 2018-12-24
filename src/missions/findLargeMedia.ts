import * as puppeteer from "puppeteer";

// const sizeLimit = 2000000;

export default async () => {
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
    await page.goto('https://us.bona.com');
    await browser.close();
};
