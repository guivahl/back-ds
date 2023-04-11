const User = require('../models/Usuario');

const HashService = require('../services/HashService');
const AuthService = require('../services/AuthService');

class UserController {
  async index(request, response) {
    const users = await User.query();
    return response.json(users);
  }

  async login(request, response) {
    const { email, senha } = request.body;

    const user = await User.query().withGraphJoined("[alunos,professores]").where(`email`,'=',email).first();
    console.log(user)

    if (!user) {
      return response
        .status(403)
        .json({ error: 'Seu e-mail ou senha estão incorretos' });
    }

    const validPassword = HashService.compareHash(senha, user.senha);

    if (!validPassword) {
      return response
        .status(403)
        .json({ error: 'Seu e-mail ou senha estão incorretos' });
    }

    const token = await AuthService.generateToken({ email: user.email });

    /*
      TO-DO:
        - retornar se é aluno ou professor no login
    */

    return response.json({ user, token });
  }
}

module.exports = new UserController();
