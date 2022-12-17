'use strict';

const findAllForUser = require("../../../utils/findAllForUser");
/**
 * recipe service
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe.recipe', ({strapi}) => ({
  async find(...args) {
    const {results, pagination} = await super.find(findAllForUser(strapi)(args));

    return {results, pagination};
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
