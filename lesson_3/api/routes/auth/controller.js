function changeUserPassword(currentUser, newPassword) {
    currentUser.password = newPassword
    return true
}

module.exports = { changeUserPassword }