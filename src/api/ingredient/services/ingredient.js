'use strict';

const findAllForUser = require("../../../utils/findAllForUser");
/**
 * ingredient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient.ingredient', ({strapi}) => ({
  async find(...args) {
    const {result, pagination} = await super.find(findAllForUser(strapi)(args))
    return {result, pagination}
  },
  async create(params) {

    const ctx = strapi.requestContext.get()
    params.data.user = ctx.state.user.id
    // some logic here
    const result = await super.create(params);
    // some more logic

    return params;
  }
}));
