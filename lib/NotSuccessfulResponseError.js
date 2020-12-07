const get = require('lodash/get')
class NotSuccessfulResponseError extends Error {
  constructor(response) {
    super(get(response, 'body.message', ''))
    this.isOperational = true
    this.body = response.body
    this.statusCode = response.statusCode
  }
}

module.exports = NotSuccessfulResponseError
