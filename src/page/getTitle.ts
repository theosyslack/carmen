import { PageAction } from '../types/PageAction'
import { ok, err } from '../labs/Result';

const getTitle: PageAction<string, Error> = async (page) => {
    try {
        const title = await page.title();
        return ok(title)
    } catch (error) {
        return err(error)
    }

}



export default getTitle