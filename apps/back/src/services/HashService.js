const bcrypt = require('bcrypt')

class HashService {
    #salt = 10;

    static async generateHash(password) {
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    }

    static async compareHash(password) {
        const isValid = await bcrypt.compare(password, hash);

        return isValid;
    }
}

module.exports = new HashService()