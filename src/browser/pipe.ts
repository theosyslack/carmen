import { PageAction } from '../types/PageAction'
import open from './open';
import close from './close';
import { BrowserOptions } from 'puppeteer';
import { createPagePipeline } from '../page';

const pipe = async (options?: BrowserOptions, ...actions: PageAction<any, any>[]) => {
    await open(options);

    const results = await createPagePipeline(...actions)

    await close()
    return results
}


export default pipe