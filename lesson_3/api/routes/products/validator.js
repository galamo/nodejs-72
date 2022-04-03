const Joi = require("joi")
const schemas = {
    createProduct: Joi.object({
        name: Joi.string().required(),
        price: Joi.number().min(1).max(10000).required(),
        imageUrl: Joi.string().required(),
        category: Joi.string().valid("dairy", "drinks").required()
    }),
    getProductById: Joi.object({
        id: Joi.string().required()
    }),
    stats: Joi.object({
        from: Joi.date().required(),
        to: Joi.date().min(Joi.ref('from')).required(),
    }),
    getAllProduts: Joi.object({})
}

function generalValidation(validatorKey) {
    return (req, res, next) => {
        const reqKey = req.method === "POST" ? "body" : "query"
        if (!schemas[validatorKey]) {
            return next(new Error(`There is an entry point without validation /${req.method} ${req.baseUrl}`))
        }
        const { error } = schemas[validatorKey].validate(req[reqKey])
        if (error) return next(new Error(error))
        return next()
    }
}

module.exports = { validate: generalValidation }