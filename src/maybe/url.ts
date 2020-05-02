import Result, { ok, err } from '../labs/Result';
import { Url } from 'url';

const checkUrl = (string: string = ""): Result<Url, Error> => {
    try {
        const url = new URL(string);
        return ok(url)
    } catch (error) {
        return err(error)
    }
};


export default checkUrl;