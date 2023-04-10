const respostasEnum = [
  '1 - Insuficiente',
  '2 - Regular',
  '3 - Bom',
  '4 - Excelente',
];

const planoRespostasEnum = [
  '1 - Mal especificado e/ou não exequível',
  '2 - Exequível',
  '3 - Muito bem especificado e exequível',
];

exports.up = (knex) => knex.schema
  .createTable('usuarios', (table) => {
    table.string('email').notNullable().unique().primary();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
  })
  .createTable('alunos', (table) => {
    table.string('emailUsuario').notNullable().unique().primary();
    table.string('numeroMatricula').notNullable().unique();
    table.foreign('emailUsuario').references('email').inTable('usuarios');
  })
  .createTable('professores', (table) => {
    table.string('emailUsuario').notNullable().unique().primary();
    table.string('numeroServidor').notNullable().unique();
    table.foreign('emailUsuario').references('email').inTable('usuarios');
  })
  .createTable('turmas', (table) => {
    table.increments('id').notNullable().primary();
    table.string('nome').notNullable();
    table.date('dataInicio').notNullable();
    table.date('dataFinal').notNullable();
    table.date('inicioSubmissao').notNullable();
    table.date('fimSubmissao').notNullable();
    table.date('inicioAvaliacao').notNullable();
    table.date('fimAvaliacao').notNullable();
    table.date('inicioResubmissao').notNullable();
    table.date('fimRessubmissao').notNullable();
    table.date('inicioReavaliacao').notNullable();
    table.date('fimReavaliacao').notNullable();
    table.string('emailCoordenador').notNullable();
    table.foreign('emailCoordenador').references('emailUsuario').inTable('professores');
  })
  .createTable('alunosTurmas', (table) => {
    table.string('emailAluno').notNullable().primary();
    table.integer('turmaId').notNullable();
    table.foreign('emailAluno').references('emailUsuario').inTable('alunos');
    table.foreign('turmaId').references('id').inTable('turmas');
  })
  .createTable('admins', (table) => {
    table.string('emailUsuario').notNullable().unique().primary();
    table.foreign('emailUsuario').references('email').inTable('usuarios');
  })
  .createTable('propostas', (table) => {
    table.increments('id').primary();
    table.string('titulo').notNullable();
    table.string('coorientador');
    table.string('caminhoArquivo').notNullable();
    table.text('resumo').notNullable();
    table.string('palavrasChave').notNullable();
    table.integer('turmaId').notNullable();
    table.string('emailAluno').notNullable();
    table.string('emailOrientador').notNullable();
    table.foreign('emailAluno').references('emailUsuario').inTable('alunos');
    table.foreign('turmaId').references('id').inTable('turmas');
    table.foreign('emailOrientador').references('emailUsuario').inTable('professores');
  })
  .createTable('revisoes', (table) => {
    table.increments('id').notNullable().primary();
    table.integer('propostaId').notNullable();
    table.date('revisadoEm').notNullable();
    table.enu('apresentacao', respostasEnum).notNullable();
    table.enu('relevancia', respostasEnum).notNullable();
    table.enu('metodologia', respostasEnum).notNullable();
    table.bool('foiAdequado').notNullable();
    table.enu('planoDeTrabalho', planoRespostasEnum).notNullable();
    table.bool('foiAprovado').notNullable();
    table.text('resumo').notNullable();
    table.text('pontosFortes').notNullable();
    table.text('pontosFracos').notNullable();
    table.text('detalhamento').notNullable();
    table.string('emailRevisor').notNullable();
    table.foreign('emailRevisor').references('emailUsuario').inTable('professores');
    table.foreign('propostaId').references('id').inTable('propostas');
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('revisoes')
  .dropTableIfExists('propostas')
  .dropTableIfExists('admins')
  .dropTableIfExists('alunosTurmas')
  .dropTableIfExists('turmas')
  .dropTableIfExists('professores')
  .dropTableIfExists('alunos')
  .dropTableIfExists('usuarios');
