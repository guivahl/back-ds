const { expressjwt: expressJwt } = require('express-jwt');

const { SECRET_ENV } = require('../config');

const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Admin = require('../models/Admin');

class Authentication {
  static initialize() {
    return expressJwt({ secret: SECRET_ENV, algorithms: ['HS256'] }).unless({
      path: [
        '/users/login',
      ],
    });
  }

  static async checkIfUserIsStudent(request, response, next) {
    const { email } = request.auth;

    const isStudent = await Student.query().findById(email);

    if (!isStudent) {
      return response.status(403).json({ message: 'Você não tem permissão para acessar' });
    }

    next();
  }

  static async checkIfUserIsProfessor(request, response, next) {
    const { email } = request.auth;

    const isProfessor = await Professor.query().findById(email);

    if (!isProfessor) {
      return response.status(403).json({ message: 'Você não tem permissão para acessar' });
    }

    next();
  }

  static async checkIfUserIsAdmin(request, response, next) {
    const { email } = request.auth;

    const isAdmin = await Admin.query().findById(email);

    if (!isAdmin) {
      return response.status(403).json({ message: 'Você não tem permissão para acessar' });
    }

    next();
  }
}

module.exports = Authentication;
