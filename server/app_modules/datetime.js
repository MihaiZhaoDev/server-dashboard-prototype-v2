/**
 * Module dependencies.
 */
const moment = require('moment-timezone');

/**
 * Valid cities array
 * @type {string[]}
 */
const validCities = ['Europe/Sofia', 'Europe/Berlin', 'Europe/Madrid', 'Asia/Tokyo', 'Europe/Warsaw', 'Europe/Istanbul', 'Europe/Moscow', 'Europe/Amsterdam', 'Europe/Paris'];

/**
 * Check if city is a valid city
 * If valid city, return Promise<{city: String, computedDateTime: String}>
 * if invalid city, trows new error, return Promise<{message: String}>
 * @param city
 * @returns {Promise<{city: String, computedDateTime: String}>}
 * @throws {Promise<{message: String}>}
 */
exports.validateCity = (city) => {
    return new Promise((resolve, reject) => {
        if( validCities.includes(city) ) {
            return resolve({
                city: city,
                computedDateTime: moment().tz(city).format('LL LTS')
            });
        }

        else {
            return reject({
                message: `The city ${city} is not valid.`,
            });
        }
    });
}
