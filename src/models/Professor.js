const Model = require('./index');
const Usuario = require('./Usuario');
const Turma = require('./Turma');
const Revisao = require('./Revisao');
const Proposta = require('./Proposta');

class Professor extends Model {
  static get tableName() {
    return 'professores';
  }

  static get idColumn() {
    return 'emailUsuario';
  }

  static relationMappings = {
    usuario: {
      relation: Model.BelongsToOneRelation,
      modelClass: Usuario,
      join:
      {
        from: 'professores.emailUsusario',
        to: 'usuarios.email',
      },
    },
    turmas:
    {
      relation: Model.HasManyRelation,
      modelClass: Turma,
      join:
      {
        from: 'professores.emailUsusario',
        to: 'turmas.emailCoordenador',
      },
    },
    revisoes:
    {
      relation: Model.HasManyRelation,
      modelClass: Revisao,
      join:
      {
        from: 'professores.emailUsusario',
        to: 'revisoes.emailRevisor',
      },
    },
    propostas:
    {
      relation: Model.HasManyRelation,
      modelClass: Proposta,
      join:
      {
        from: 'professores.emailUsusario',
        to: 'propostas.emailOrientador',
      },
    },
  };
}

module.exports = Professor;
