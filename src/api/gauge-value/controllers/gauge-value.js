'use strict';

/**
 * A set of functions called "actions" for `gauge-value`
 */

module.exports = {
  async gaugeValue(ctx, next) {
    try {
      const data = await strapi
        .service("api::gauge-value.gauge-value").gaugeValue();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
