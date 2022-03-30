const express = require('express')
require("dotenv").config()
const app = express()
const { PORT, USER_NAME } = process.env


console.log(USER_NAME)



app.listen(PORT)