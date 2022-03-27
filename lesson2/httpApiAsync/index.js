const http = require('http')
const { writeLog } = require("../../lesson_1/fsWriter")

const server = http.createServer(async function (req, res) {
    const isFavoconRequest = req.url === "/favicon.ico" && req.method === "GET"
    !isFavoconRequest && writeLog(`Request Started ${req.url} from: ${req.socket.remoteAddress}`)
    await new Promise((resolve => setTimeout(resolve, 3000)))
    res.end(`Http Server is working ${new Date().toUTCString()}`)
    !isFavoconRequest && writeLog(`Request Finished ${req.url} from: ${req.socket.remoteAddress}`)
})

server.listen(2500)

