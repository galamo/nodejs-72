

const { safeParse } = require("../safeParse")
async function init() {
    const userName = { user: "gal" }
    const stringObj = JSON.stringify(userName)
    console.log(safeParse(stringObj + "blablblabla"))
};

init()
