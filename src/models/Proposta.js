const Model = require('./index');
const Aluno = require('./Aluno');
const Turma = require('./Turma');
const Professor = require('./Professor');
const Revisao = require('./Revisao');

class Proposta extends Model {
  static get tableName() {
    return 'propostas';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = {
    aluno: {
      relation: Model.BelongsToOneRelation,
      modelClass: Aluno,
      join: {
        from: 'propostas.emailAluno',
        to: 'alunos.emailUsuario',
      },
    },
    turma: {
      relation: Model.BelongsToOneRelation,
      modelClass: Turma,
      join: {
        from: 'propostas.turmaId',
        to: 'turmas.id',
      },
    },
    professor: {
      relation: Model.BelongsToOneRelation,
      modelClass: Professor,
      join: {
        from: 'propostas.emailOrientador',
        to: 'professores.emailUsuario',
      },
    },
    revisoes: {
      relation: Model.HasManyRelation,
      modelClass: Revisao,
      join: {
        from: 'propostas.id',
        to: 'revisoes.propostaId',
      },
    },
  };
}

module.exports = Proposta;
