const express = require("express")
const res = require("express/lib/response")
const router = express.Router()
const { validate } = require("./validator")
const { sessions } = require("../../data")
router.use(authMiddleware)
router.get("/", validate("getAllProducts"), productsHandler)
router.get("/find", validate("getProductById"), findHandler) // /products/find
router.post("/", validate("createProduct"), createProduct) // /products/
router.post("/stats", validate("stats"), (req, res) => { res.send("ok") })


function productsHandler(req, res, next) {
    res.json({ products: ["p1", "p2"] })
}
function findHandler(req, res, next) {
    res.json({ product0: "p1", message: "found" })
}

function createProduct(req, res, next) {
    res.json({ message: "ok" })
}

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"]
    if (!token || !sessions[token]) return res.status(401).json({ message: "unauthorized" })
    return next()
}
module.exports = { router }