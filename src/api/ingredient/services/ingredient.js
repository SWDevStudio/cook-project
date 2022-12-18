'use strict';

const findAllForUser = require("../../../utils/findAllForUser");
const {FilterBuilder} = require("../../../utils/FilterBuilder");
/**
 * ingredient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient.ingredient', ({strapi}) => ({
  async find(params) {
    const filters = new FilterBuilder(strapi)
    filters
      .authUser()

    // some logic here
    const {results, pagination} = await super.find({
      ...params,
      filters: filters.getFilters()
    });
    // some more logic

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
