const express = require('express')
const port = 2500
const app = express()


app.get("/login", (req, res) => {
    const { userName } = req.query
    console.log(`Request Started ${req.ip} - ${userName}`)
    res.json({ message: `Login succeeded! for ${userName}` })
})

app.listen(port).on("listening", function () {
    console.log(`Server is listen to Port ${port}`)
})

