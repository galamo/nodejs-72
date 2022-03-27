
const safeParseModule = require("../safeParse")
const fs = require("fs")
async function init() {
    const userName = { user: "gal" }
    const stringObj = JSON.stringify(userName)
    console.log(safeParseModule.safeParse(stringObj + "blablblabla"))
};
init()

