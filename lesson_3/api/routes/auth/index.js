const express = require("express")
const router = express.Router()

router.use(authMiddleware)
router.post("/login", loginHandler)
router.post("/register", loginHandler)

function loginHandler(req, res, next) {
    const { userName, password } = req.body
    res.json({ userName, password, message: `Success` })
}

function authMiddleware(req, res, next) {
    next()
}

module.exports = { router }