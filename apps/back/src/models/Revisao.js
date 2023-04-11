const Model = require('./index');
const Professor = require('./Professor');
const Proposta = require('./Proposta');

class Revisao extends Model {
  static get tableName() {
    return 'revisoes';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = {
    revisor: {
      relation: Model.BelongsToOneRelation,
      modelClass: Professor,
      join: {
        from: 'revisoes.emailRevisor',
        to: 'professores.emailUsuario',
      },
    },
    proposta: {
      relation: Model.BelongsToOneRelation,
      modelClass: Proposta,
      join: {
        from: 'revisoes.propostaId',
        to: 'propostas.id',
      },
    },
  };
}

module.exports = Revisao;
