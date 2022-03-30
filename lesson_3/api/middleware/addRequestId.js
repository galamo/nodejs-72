const { generateRequestId } = require("./helpers/")

function addRequestId(req, res, next) {
    const requestId = generateRequestId()
    req.requestId = requestId
    res.append("x-request-id", requestId)
    next()
}

module.exports = { addRequestId }