import { PageAction } from '../types/PageAction'
import open from './open';

const pipe = async (...actions: PageAction<any, any>[]) => {
    const page = await open();

    let results = [];

    for (const action of actions) {
        const result = await action(page);
        results.push(result)

        if (!result.ok) {
            throw result.unwrap()
        }
    }

    await page.close()

    return results
}


export default pipe