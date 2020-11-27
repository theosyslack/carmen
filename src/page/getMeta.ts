import { PageAction } from '../types/PageAction'
import { ok, err } from '../labs/Result';
import getTitle from './getTitle';

type Meta = {
    [key: string]: string
}


const getMeta: PageAction<Meta, Error> = async (page) => {
    try {
        const meta = await page.$$eval('meta', (metaEls) => {

            return metaEls.reduce((acc, el) => {
                const key = el.getAttribute('name');
                const value = el.getAttribute('content');

                if (key && value) {
                    return Object.assign({}, acc, { [key]: value })
                } else {
                    return acc
                }
            }, {})

        })

        const title = await getTitle(page);

        if (title.ok) {
            const withTitle = Object.assign({}, meta, { title: title.unwrap() })

            return ok(withTitle)
        }



        return ok(meta)
    } catch (error) {
        return err(error)
    }

}



export default getMeta