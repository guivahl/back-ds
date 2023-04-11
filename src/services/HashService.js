const bcrypt = require('bcrypt');
const { BRCRYPT_SALT } = require('../config');

class HashService {
  static generateHash(password) {
    const hashedPassword = bcrypt.hashSync(password, BRCRYPT_SALT);

    return hashedPassword;
  }

  static compareHash(password, hash) {
    const isValid = bcrypt.compareSync(password, hash);

    return isValid;
  }
}

module.exports = HashService;
