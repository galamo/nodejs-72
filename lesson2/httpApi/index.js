const http = require('http')
const { writeLog } = require("../../lesson_1/fsWriter")

const server = http.createServer(function (req, res) {
    // longCalculation()
    writeLog(`Request Started ${req.url} from: ${req.socket.remoteAddress}`)
    res.end(`Http Server is working ${new Date().toUTCString()}`)
})

server.listen(2500)

function longCalculation() {
    for (let index = 0; index < 999999999; index++) {
    }
}