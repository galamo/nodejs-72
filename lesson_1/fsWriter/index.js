const fs = require("fs")

function writeLog(message) {
    const logRow = `[${new Date().toUTCString()}] - ${message}\n`
    fs.appendFile("./log.txt", logRow, function (err) {
        if (err) {
            throw new Error("there is error with the file")
        } else {
            console.log("content saved!")
        }

    })
}
writeLog("Start script")