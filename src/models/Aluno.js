const Model = require('./index');
const Proposta = require('./Proposta');
const User = require('./User');

class Aluno extends Model {
  static get tableName() {
    return 'alunos';
  }

  static get idColumn() {
    return 'emailUsuario';
  }

  static relationMappings = {
    usuario: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'alunos.emailUsuario',
        to: 'usuarios.email',
      },
    },
    propostas: {
      relation: Model.HasManyRelation,
      modelClass: Proposta,
      join: {
        from: 'alunos.emailUsuario',
        to: 'propostas.emailAluno',
      },
    },
  };
}

module.exports = Aluno;
