'use strict';

/**
 * A set of functions called "actions" for `charts-values`
 */

module.exports = {
  async chartValues(ctx, next) {
    try {
      const data = await strapi
        .service("api::charts-values.charts-values").chartValues();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};