
console.log("start script!")
let globalState = {}
function safeParse(stringObj) {
    if (!stringObj) return
    let result = stringObj
    try {
        result = JSON.parse(stringObj)
        // parse succsfully finished
    } catch {
        result = "Invalid JSON string object"
         // parse failed: <error message>
    }
    // finished parse 
    return result
}

module.exports = { safeParse, globalState }

