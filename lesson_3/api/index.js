const express = require('express')
require("dotenv").config()
const bodyParser = require('body-parser')
const { addRequestId } = require("./middleware/addRequestId")
const app = express()
const { PORT } = process.env

const { router: authRouter } = require("./routes/auth")
const { router: productsRouter } = require("./routes/products")
app.use(bodyParser.json())
app.use(addRequestId)
app.use("/auth", authRouter)
app.use("/products", productsRouter)

app.use((error, req, res, next) => {
    console.log(error.message, req.requestId)
    res.status(400).send("Something went wrong!")
})
app.listen(PORT)