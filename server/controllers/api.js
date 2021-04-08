/**
 * Module dependencies.
 */
const datetime = require('../app_modules/datetime');
const logger = require('../app_modules/logger');

/**
 * Send JSON with app status
 * @param req
 * @param res
 * @param next
 * @returns {res.json}
 */
exports.index = function (req, res, next) {
    logger.info('/api');

    return res.json({
        status: 'Active',
        date: new Date()
    })
};

/**
 * Update the timezone
 * @param req
 * @param res
 * @param next
 * @returns {res.json}
 */
exports.updateTimezone = function (req, res, next) {
    logger.info('/api/timezone/update');

    let {timezone} = req.body;

    datetime
        .validateCity(timezone)
        .then(timezone => {
            logger.debug(`Timezone has been set to ${timezone.city} with computed date ${timezone.computedDateTime}.`);
            return res.status(200).json({
                success: {
                    message: `The timezone has been set to ${timezone.city}.`
                },
                timezone: timezone.city,
                date: timezone.computedDateTime
            });
        })
        .catch(error => {
            logger.error(error);
            return res.status(400).json({
                message: error.message
            });
        });
}

/**
 * Update logger level
 * @param req
 * @param res
 * @param next
 * @returns {res.json}
 */
exports.updateLogger = function (req, res, next) {
    logger.info('/api/logger/update');

    let {loggerLevel} = req.body;

    logger.changeLevel(loggerLevel);
    logger.debug('Logger level has been set to ' + loggerLevel);

    return res.json({
        success: {
            message: `The log level has been set to ${loggerLevel}.`
        },
        level: loggerLevel
    });
}


