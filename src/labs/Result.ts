export type Result<T, E> = Ok<T> | Err<E>

abstract class Unwrappable<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    unwrap(): T {
        return this.value
    }
}

interface Ok<T> extends Unwrappable<T> {
    ok: true;
}

interface Err<T> extends Unwrappable<T> {
    ok: false;
}


const ok = <T>(value: T): Ok<T> => {
    return {
        value,
        ok: true,
        unwrap: () => value
    }
}

const err = <T>(value: T): Err<T> => {
    return {
        value,
        ok: false,
        unwrap: () => value
    }
}

export { ok }
export { err }
export default Result