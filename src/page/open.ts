import openBrowser from '../browser/open';
import checkUrl from '../maybe/url';
import { Page } from 'puppeteer';

const open = async (destination?: string): Promise<Page> => {
    const browser = await openBrowser();
    const page = await browser.newPage();
    const maybeUrl = checkUrl(destination);

    if (maybeUrl.ok) {
        const url = maybeUrl.unwrap();
        console.log(`Navigating to ${url.hostname}`)
        await page.goto(url.toString());
    }

    return page
}


export default open