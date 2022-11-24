/**
 * @param { Strapi } strapi
 * @description Собирает параметры для запроса, таким образом, что бы получить данные только для пользователя который делает запрос.
 */
function findAllForUser(strapi) {
  return function (...args) {
    const ctx = strapi.requestContext.get()
    const req = args[0]

    // Ограничить ответ только авторизованым пользователем
    const filters = {
      ...req?.filters,
      user: {
        id: {
          $eq: ctx.state.user.id
        }
      }
    }

    // Вернуть все связанные объекты
    req.populate = '*'

    return {
      ...req, filters
    };
  }
}

module.exports = findAllForUser
