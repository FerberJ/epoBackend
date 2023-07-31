'use strict';

/**
 * sensor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sensor.sensor');
