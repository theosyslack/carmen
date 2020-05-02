import { PageActionCreator } from "../types/PageAction";

import { err, ok } from '../labs/Result';
import checkUrl from '../maybe/url';

enum NavigationStatus {
    Success = "PAGE_NAVIGATION_SUCCESS"
}


const go: PageActionCreator<string, NavigationStatus.Success, Error> = (url) => async (page) => {
    try {
        const maybeUrl = checkUrl(url);
        if (!maybeUrl.ok) throw Error(`"${url}" is not a valid URL`)
        await page.goto(url)
        return ok(NavigationStatus.Success);
    } catch (e) {
        return err(e)
    }
}

export default go