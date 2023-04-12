const { expressjwt: expressJwt } = require('express-jwt');

const { SECRET_ENV } = require('../config');

class ExpressJwt {
  static initialize() {
    return expressJwt({ secret: SECRET_ENV, algorithms: ['HS256'] }).unless({
      path: [
        '/users/login',
      ],
    });
  }
}

module.exports = ExpressJwt;
