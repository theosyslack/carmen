import { PageAction } from '../types/PageAction'
import open from './open';
import close from './close';
import { LaunchOptions } from 'puppeteer';
import { createPagePipeline } from '../page';

const pipe = async (actions: PageAction<any, any>[], options?: LaunchOptions, ) => {
    await open(options);

    const results = await createPagePipeline(...actions)

    await close()
    return results
}


export default pipe