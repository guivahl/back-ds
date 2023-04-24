const { ReasonPhrases, StatusCodes } = require('http-status-codes') 

class HttpError {
    constructor(status, message) {
      this.status = status ?? StatusCodes.INTERNAL_SERVER_ERROR
      this.message = message ?? ReasonPhrases.INTERNAL_SERVER_ERROR
    }
}

class HttpBadRequest extends HttpError {
  constructor(message = ReasonPhrases.BAD_REQUEST) {
    super(StatusCodes.BAD_REQUEST, message)
  }
}

class HttpInternalServerError extends HttpError {
  constructor(message = ReasonPhrases.INTERNAL_SERVER_ERROR) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message)
  }
}

class HttpUnauthorized extends HttpError {
  constructor(message = ReasonPhrases.UNAUTHORIZED) {
    super(StatusCodes.UNAUTHORIZED, message)
  }
}

class HttpForbidden extends HttpError {
  constructor(message = ReasonPhrases.FORBIDDEN) {
    super(StatusCodes.FORBIDDEN, message)
  }
}

class HttpNotFound extends HttpError {
  constructor(message = ReasonPhrases.NOT_FOUND) {
    super(StatusCodes.NOT_FOUND, message)
  }
}

module.exports = {
    HttpBadRequest,
    HttpInternalServerError,
    HttpUnauthorized,
    HttpForbidden,
    HttpNotFound
}