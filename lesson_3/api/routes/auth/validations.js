function isUserExist(users, userName) {
    return users.find((u) => u.userName === userName)
}

function isPasswordMatch(user, passwrod) {
    return user.password === passwrod
}

module.exports = { isUserExist, isPasswordMatch }