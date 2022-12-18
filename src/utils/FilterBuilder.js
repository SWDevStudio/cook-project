class FilterBuilder {
  filters = {}
  populate
  /** @type Strapi */
  #strapi

  constructor(strapi) {
    this.#strapi = strapi
  }

  authUser(userKey = 'user') {
    if (!this.#strapi)
      throw new Error('Strapi не передан в конструктор FilterBuilder')
    this.filters = {
      ...this.filters,
      user: {
        id: {
          $eq: this.#strapi.requestContext.get().state.user.id
        }
      }
    }
  }

  allInformation() {
    this.populate = '*'
    return this
  }

  getFilters() {
    return this.filters

  }
}


module.exports = {
  FilterBuilder
}
