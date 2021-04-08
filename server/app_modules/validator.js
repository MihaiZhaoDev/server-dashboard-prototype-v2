/**
 * Module dependencies.
 */
const {body, validationResult} = require('express-validator');

/**
 * Validator chain for timezone (Middleware layer)
 */
exports.timezone = [
    body('timezone').exists().isLength({max: 100}),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array(),
            });
        }

        next();
    },
]

/**
 * Validator chain for logger level (Middleware layer)
 */
exports.logger = [
    body('loggerLevel')
        .exists()
        .isLength({max: 100})
        .isIn(['error', 'debug', 'info'])
    ,
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array(),
            });
        }

        next();
    },
]
