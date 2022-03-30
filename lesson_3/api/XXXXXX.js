const express = require('express')
const port = 2500
const app = express()

// app.delete
// app.put
// app.post

function validateUserExist(user) {
    return user && typeof user === 'string'
}

function validateUserLength(user) {
    return user.length > 5 && user.length < 100
}
// app.use(uShellNotPass) // only for test download

app.use(addRequestId)
app.use(requestStartedMiddleware)
app.use(validateUserName)

app.get("/login", (req, res) => {
    const { user } = req.query

    if (!validateUserLength(user)) {
        console.log(`User was not validated ${req.requestId}`)
        return res.status(400).json({ message: "userName is too short/long", requestId: req.requestId, date: new Date().toUTCString() })
    }
    console.log(`Login Success for user ${req.requestId}`)
    res.json({ message: `Login succeeded! for ${user}` })
})

app.get("/register", (req, res) => {
    const { userName } = req.query
    console.log(`Request Started ${req.ip} - ${userName}`)
    res.send("Rgister complete")
})


app.listen(port).on("listening", function () {
    console.log(`Server is listen to Port ${port}`)
})


function requestStartedMiddleware(req, res, next) {
    console.log(`Request Started ${req.url}`)
    next()
}
function validateUserName(req, res, next) {
    const { user } = req.query
    if (!validateUserExist(user)) {
        console.log(`User was not validated validateUserExist ${req.requestId}`)
        return res.status(400).json({ message: "userName validateUserExist", requestId: req.requestId, date: new Date().toUTCString() })
    }
    next()
}




function uShellNotPass(req, res, next) {
    return res.download("./download.jpg")
}

function addRequestId(req, res, next) {
    const requestId = Math.ceil(Date.now() * Math.random() * 23)
    res.append("x-request-id", requestId)
    req.requestId = requestId
    next()
}