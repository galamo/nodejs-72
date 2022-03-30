const express = require('express')
const port = 2500
const app = express()

// app.delete
// app.put
// app.post


app.get("/login", (req, res) => {
    const { userName } = req.query
    if (typeof userName !== 'string') {
        return res.status(400).json({ message: "invalid userName" })
    } else {
        console.log(`Request Started ${req.ip} - ${userName}`)
        res.json({ message: `Login succeeded! for ${userName}` })
    }
})

app.get("/register", (req, res) => {
    const { userName } = req.query
    console.log(`Request Started ${req.ip} - ${userName}`)
    res.send("Rgister complete")
})

app.get("/login2", (req, res) => {
    const { userName } = req.query
    console.log(`Request Started ${req.ip} - ${userName}`)
    res.json({ message: `Login2 succeeded! for ${userName}` })
})

app.listen(port).on("listening", function () {
    console.log(`Server is listen to Port ${port}`)
})

