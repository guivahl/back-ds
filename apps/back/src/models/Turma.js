const Model = require('./index');
const Aluno = require('./Aluno');
const Professor = require('./Professor');

class Turma extends Model {
  static get tableName() {
    return 'turmas';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = {
    alunos: {
      relation: Model.ManyToManyRelation,
      modelClass: Aluno,
      join: {
        from: 'turmas.id',
        through: {
          from: 'alunosTurmas.turmaId',
          to: 'alunosTurmas.emailAluno',
        },
        to: 'alunos.emailUsuario',
      },
    },
    coordenador: {
      relation: Model.BelongsToOneRelation,
      modelClass: Professor,
      join: {
        from: 'turmas.emailCoordenador',
        to: 'professores.emailUsuario',
      },
    },
  };
}

module.exports = Turma;
