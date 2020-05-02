import { PageAction, PageActionCreator } from '../types/PageAction'
import { PathLike } from 'fs'
import { ok, err } from '../labs/Result';
import { ScreenshotOptions } from 'puppeteer';

import { resolve } from 'path';

const screenshot: PageActionCreator<ScreenshotOptions, PathLike, Error> = (options) => async (page) => {
    if (!options.path) {
        const now = Date.now();
        options.path = resolve(process.cwd(), `./${now}.png`);
    }

    try {
        await page.screenshot(options)
        return ok(options.path)
    } catch (error) {
        return err(error)
    }

}



export default screenshot