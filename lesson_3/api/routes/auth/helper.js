const { sessions } = require('../../data')
function generateSession(userName) {
    return `${btoa(userName)}_${Date.now()}`
}

function addSession(session, currentUser) {
    sessions[session] = { ...currentUser, password: null }
}

function removeSession() {

}

module.exports = { generateSession, addSession, removeSession }