import * as puppeteer from 'puppeteer';
import { URL } from 'url';
import log from "../actions/log";

let targetPage = 'https://retail.johnsonville.com'

export default async () => {
    let failedStatus: any[] = [];
    let errorPages: any[] = [];

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(targetPage);

    let resultAnchors = await page.evaluate(() => {
        let elements = Array.from(document.querySelectorAll('a')).map(link => link.href)
        return elements;
    });

    log(resultAnchors.length + ' links found on ' + targetPage, 'pending')

    const start = async () => {
        await asyncForEach(resultAnchors, async (anchor) => {
            try {
                let { origin, pathname, search } = new URL(anchor)
                let sanitizedURL = origin + pathname + search;

                log('Navigating to: ' + sanitizedURL, 'default')

                const response = await page.goto(sanitizedURL, {
                    waitUntil: 'domcontentloaded',
                    timeout: 6000
                });
                if (response.status() > 399)

                    failedStatus.push(sanitizedURL, response.status());

            } catch (error) {
                log('Error on page: ' + anchor + error, 'error')
                errorPages.push(anchor, error);
            }

        });

        console.log('Done');
        console.log('failedStatus', failedStatus);
        console.log('errorPages', errorPages);
        await browser.close();
    }
    start();


    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }


};
