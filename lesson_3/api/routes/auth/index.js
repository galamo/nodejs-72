const express = require("express")
const router = express.Router()
const { isUserExist, isPasswordMatch, validateChangePasswordMiddleware } = require('./validations')
const { users } = require("../../data/index")
const { changeUserPassword } = require("./controller")
const { generateSession, addSession } = require("./helper")


router.use(authMiddleware)
router.post("/login", loginHandler)
router.post("/register", registerHandler)
router.post("/change-password", validateChangePasswordMiddleware, changePasswordHandler)
function loginHandler(req, res, next) {
    const { userName, password } = req.body
    const currentUser = isUserExist(users, userName)
    if (!currentUser) return res.status(404).send("User not found")
    if (!isPasswordMatch(currentUser, password)) return res.status(401).send("User not Authorized - Go to Hell!")
    const userSession = generateSession(currentUser.userName)
    addSession(userSession, currentUser)
    res.json({ userName, password, message: `Success`, sesison: userSession })
}
function registerHandler(req, res, next) {
    const { userName, password } = req.body
    res.json({ userName, password, message: `Success` })
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


function validateParams(req, res, next) {
    const { password, userName, newPassword, newPasswordConfirm } = req.body
    if (!password || !userName || !newPassword || !newPasswordConfirm) return res.status(400).send("missing paramters")
    next()
}

function authMiddleware(req, res, next) {
    next()
}



module.exports = { router }