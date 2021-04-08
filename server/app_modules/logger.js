/**
 * Module dependencies
 */
const winston = require('winston');
const moment = require('moment');

/**
 * Winston settings
 */
const options = {
    file: {
        level: 'debug',
        filename: '../logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

/**
 * Define transports for winston
 * @type {{console: winston.ConsoleTransportInstance, file: winston.FileTransportInstance}}
 */
const transports = {
    file: new winston.transports.File(options.file),
    console: new winston.transports.Console(options.console)
};

/**
 * Create winston logger
 * @type {winston.Logger}
 */
const logger = winston.createLogger({
    format:
        winston.format.printf(
            info => `${moment().format('LLL')} [${info.level}]: ${info.message}`
        )
    ,
    transports: [
        transports.file,
        transports.console
    ],
    exitOnError: false
})

/**
 * Logger actions
 * @type {{debug: actions.debug, changeLevel: actions.changeLevel, error: actions.error, info: actions.info}}
 */
const actions = {
    changeLevel: (level) => {
        transports.console.level = level;
        transports.file.level = level;
    },
    info: (msg) => {
        logger.info(msg);
    },
    debug: (msg) => {
        logger.debug(msg);
    },
    error: (msg) => {
        logger.error(msg);
    }
}

module.exports = actions;
