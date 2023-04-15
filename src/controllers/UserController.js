const User = require('../models/User');

const HashService = require('../services/HashService');
const AuthService = require('../services/AuthService');

class UserController {
  async index(request, response) {
    const users = await User.query();

    return response.json(users);
  }

  async login(request, response) {
    const { email, password } = request.body;

    const user = await User.query().withGraphJoined('[student, professor]').where('email', '=', email).first();

    if (!user) {
      return response
        .status(403)
        .json({ error: 'Seu e-mail ou senha estão incorretos' });
    }

    const validPassword = HashService.compareHash(password, user.password);

    if (!validPassword) {
      return response
        .status(403)
        .json({ error: 'Seu e-mail ou senha estão incorretos' });
    }

    const token = await AuthService.generateToken({ email: user.email });

    return response.json({ user, token });
  }
}

module.exports = new UserController();
