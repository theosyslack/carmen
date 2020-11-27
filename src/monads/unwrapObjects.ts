import Result from "../labs/Result";


const unwrapObjects = (results: Result<object, any>[]) => {
    return results.reduce((acc, result) => {
        if (result.ok) {
            return Object.assign({}, acc, result.value)
        } else {
            return acc
        }
    }, {})
}

export default unwrapObjects