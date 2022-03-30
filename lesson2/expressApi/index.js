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

app.use(requestStartedMiddleware)
app.use((req, res, next) => {
    console.log(req.url, "second middleware")
    next()
})

app.get("/login", (req, res) => {
    const { userName } = req.query
    if (!validateUserExist(userName)) {
        return res.status(400).json({ message: "userName not exist", date: new Date().toUTCString() })
    }
    if (!validateUserLength(userName)) {
        return res.status(400).json({ message: "userName is too short/long", date: new Date().toUTCString() })
    }
    console.log(`Request Started ${req.ip} - ${userName}`)
    res.json({ message: `Login succeeded! for ${userName}` })
})

app.get("/register", (req, res) => {
    const { userName } = req.query
    if (!validateUserExist(userName)) {
        return res.status(400).json({ message: "userName not exist" })
    }
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