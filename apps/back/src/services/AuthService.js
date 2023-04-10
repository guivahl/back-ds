const jwt = require('jsonwebtoken')
const { SECRET_ENV } = require('../config')

class AuthService {

    static async generateToken (params = {}) {
        const token = await jwt.sign(params, SECRET_ENV)
        return token;
    } 
}

module.exports = new AuthService()