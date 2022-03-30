const express = require("express")
const router = express.Router()

router.get("/", productsHandler)
router.get("/find", findHandler)

function productsHandler(req, res, next) {
    res.json({ products: ["p1", "p2"] })
}
function findHandler(req, res, next) {
    res.json({ product0: "p1", message: "found" })
}

module.exports = { router }