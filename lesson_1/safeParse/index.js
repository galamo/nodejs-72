function safeParse(stringObj) {
    if (!stringObj) return
    let result = stringObj
    try {
        result = JSON.parse(stringObj)
    } catch {
        result = "Invalid JSON string object"
    }
    return result
}

module.exports = { safeParse, log } 