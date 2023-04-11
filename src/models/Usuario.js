const Model = require('./index');
const Aluno = require('./Aluno');
const Admin = require('./Admin');
const Professor = require('./Professor');

const visibilityPlugin = require('objection-visibility').default;

class Usuario extends visibilityPlugin(Model) {
  static get tableName() {
    return 'usuarios';
  }

  static get idColumn() {
    return 'email';
  }

  static get hidden() {
    return 'senha';
  }

  static relationMappings = {
    alunos: {
      relation: Model.HasManyRelation,
      modelClass: Aluno,
      join: {
        from: 'usuarios.email',
        to: 'alunos.emailUsuario',
      },
    },
    admins: {
      relation: Model.HasManyRelation,
      modelClass: Admin,
      join: {
        from: 'usuarios.email',
        to: 'admins.emailUsuario',
      },
    },
    professores: {
      relation: Model.HasOneRelation,
      modelClass: Professor,
      join: {
        from: 'usuarios.email',
        to: 'professores.emailUsuario',
      },
    },
  };
}

module.exports = Usuario;
