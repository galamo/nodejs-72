const express = require("express")
const router = express.Router()

router.use(authMiddleware)
router.get("/login", loginHandler)
router.get("/register", loginHandler)

function loginHandler(req, res, next) {
    const { userName, password } = req.query
    res.json({ userName, password, message: `Success` })
}

function authMiddleware(req, res, next) {
    next()
}

module.exports = { router }