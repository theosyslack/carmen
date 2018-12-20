import * as puppeteer from "puppeteer";
import { URL } from "url";
import log from "../actions/log";
import * as fs from 'fs';

export default async targetPage => {
    let failedStatus: any[] = [];
    let errorPages: any[] = [];
    let pageOrigin;

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(targetPage);

    let resultAnchors = await page.evaluate(() => {
        let elements = Array.from(document.querySelectorAll("a")).map(
            link => link.href
        );
        return elements;
    });

    log(resultAnchors.length + " links found on " + targetPage, "pending");



    const start = async () => {
        await asyncForEach(resultAnchors, async anchor => {
            try {
                let { host, origin, pathname, search } = new URL(anchor);
                pageOrigin = host;
                let sanitizedURL = origin + pathname + search;

                log("Navigating to: " + sanitizedURL, "default");

                const response = await page.goto(sanitizedURL, {
                    waitUntil: "domcontentloaded",
                    timeout: 6000
                });
                if (response.status() > 399)
                    failedStatus.push(sanitizedURL, response.status());
            } catch (error) {
                log("Error on page: " + anchor + error, "error");
                errorPages.push({ anchor, error });
            }
        });


        checkDirectorySync('./reports');
        checkDirectorySync('./reports/' + pageOrigin);

        console.log("Done");

        writeFile('./reports/' + pageOrigin + '/failedPageStatus.json', JSON.stringify(failedStatus))
        writeFile('./reports/' + pageOrigin + '/errorPages.json', JSON.stringify(errorPages));
        await browser.close();
    };
    start();

    const writeFile = function (path, data) {
        fs.writeFile(path, data, 'utf8', e => {
            if (e) {
                log('Failed to save file to: ' + path + ' with error: ' + e, 'error');
            } else {
                log('Saving file to: ' + path, 'default');
            }
        });
    };

    const checkDirectorySync = function (dir) {
        try {
            fs.statSync(dir);
        } catch (e) {
            fs.mkdirSync(dir);
            log('Creating Dir: ' + dir, 'default');
        }
    };

    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }
};
