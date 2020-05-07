import { Page } from 'puppeteer';

const close = async (page: Page) => {
    await page.close()
}


export default close