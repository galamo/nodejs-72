const { isUserExist, isPasswordMatch } = require('./validations')

console.log("isUserExist result: ", isUserExist([{ userName: "gal" }], "gal"))
console.log("isUserExist result: ", isUserExist([{ userName: "gal1" }], "gal"))
console.log("isPasswordMatch result: ", isPasswordMatch({ password: "1234aaa" }, "1234aaa"))
console.log("isPasswordMatch result: ", isPasswordMatch({ password: "124aaa" }, "1234aaa")) 