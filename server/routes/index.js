/**
 * Module dependencies.
 */
const express = require('express');
const router = express.Router();
const validator = require('../app_modules/validator');

/**
 * Controller for api
 * @type {{index?, updateTimezone?, updateLogger?}}
 */
const controller = require('../controllers/api');

/**
 * Get app status request
 */
router.get('/',
    controller.index
);

/**
 * Update timezone request
 */
router.put('/timezone/update',
    validator.timezone,
    controller.updateTimezone
)

/**
 * Update logger level request
 */
router.put('/logger/update',
    validator.logger,
    controller.updateLogger
)

/**
 * Export router settings
 * @type {Router}
 */
module.exports = router;
