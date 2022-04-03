const express = require("express")
const router = express.Router()
const { isUserExist, isPasswordMatch } = require('./validations')
const { users } = require("../../data/index")
const { changeUserPassword } = require("./controller")


router.use(authMiddleware)
router.post("/login", loginHandler)
router.post("/register", loginHandler)
router.post("/change-password", validateParams, changePasswordHandler)
function loginHandler(req, res, next) {
    const { userName, password } = req.body
    res.json({ userName, password, message: `Success` })
}
function validateParams(req, res, next) {
    const { password, userName, newPassword, newPasswordConfirm } = req.body
    if (!password || !userName || !newPassword || !newPasswordConfirm) return res.status(400).send("missing paramters")
    next()
}
function changePasswordHandler(req, res, next) {
    const { password, userName, newPassword, newPasswordConfirm } = req.body
    const currentUser = isUserExist(users, userName)
    if (!currentUser) return res.status(404).send("User not found")
    if (!isPasswordMatch(currentUser, password)) return res.status(401).send("User not Authorized - Go to Hell!")
    if (newPassword !== newPasswordConfirm) return res.status(409).send("Password confirm not match")
    changeUserPassword(currentUser, newPasswordConfirm)
    return res.json({ message: "Password changed succeed" })
}

function authMiddleware(req, res, next) {
    next()
}

module.exports = { router }