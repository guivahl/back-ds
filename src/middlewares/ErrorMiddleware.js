const {
  HttpBadRequest,
  HttpInternalServerError,
  HttpUnauthorized,
  HttpForbidden,
  HttpNotFound,
} = require('../utils/Error');

class ErrorMiddleware {
  static handler() {
    return (err, req, res, next) => {
      const formatedError = this.formatError(err);

      return res.status(formatedError.status).json({
        message: formatedError.message,
      });
    };
  }

  static formatError(err) {
    const errorStatus = err.status || err.statusCode;

    if (errorStatus) {
      switch (errorStatus) {
        case 404:
          return new HttpNotFound();
        case 400:
          return new HttpBadRequest();
        case 401:
          return new HttpUnauthorized();
        case 403:
          return new HttpForbidden();
        case 500:
        default:
          return new HttpInternalServerError();
      }
    }

    return new HttpInternalServerError();
  }
}

module.exports = ErrorMiddleware;
