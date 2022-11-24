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
}));
