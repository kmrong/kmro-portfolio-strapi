'use strict';

/**
 * preview-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preview-banner.preview-banner');
