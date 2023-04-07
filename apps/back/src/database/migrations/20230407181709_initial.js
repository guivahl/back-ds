const respostasEnum = [
  "1 - Insuficiente",
  "2 - Regular",
  "3 - Bom",
  "4 - Excelente",
];

const planoRespostasEnum = [
  "1 - Mal especificado e/ou não exequível",
  "2 - Exequível",
  "3 - Muito bem especificado e exequível",
];

exports.up = (knex) =>
  knex.schema
    .createTable("usuarios", (table) => {
      table.string("nome").notNullable();
      table.string("email").notNullable().primary();
      table.string("senha").notNullable();
    })
    .createTable("alunos", (table) => {
      table.string("numeroMatricula").notNullable().primary();
      table.string("emailUsuario").notNullable().unique();
      table.foreign("emailUsuario").references("email").inTable("usuarios")
    })
    .createTable("professores", (table) => {
      table.string("numeroServidor").notNullable().primary();
      table.string("emailUsuario").notNullable().unique();
      table.foreign("emailUsuario").references("email").inTable("usuarios")
    })
    .createTable("coordenadores", (table) => {
      table.increments("id").unique().primary();
      table.string("numeroServidor").notNullable().unique();
      table.foreign("numeroServidor").references("numeroServidor").inTable("professores")
    })
    .createTable("turmas", (table) => {
      table.increments("id").notNullable().primary();
      table.string("nome").notNullable();
      table.date("dataInicio").notNullable();
      table.date("dataFinal").notNullable();
      table.date("inicioSubmissao").notNullable();
      table.date("fimSubmissao").notNullable();
      table.date("inicioAvaliacao").notNullable();
      table.date("fimAvaliacao").notNullable();
      table.date("inicioResubmissao").notNullable();
      table.date("fimRessubmissao").notNullable();
      table.date("inicioReavaliacao").notNullable();
      table.date("fimReavaliacao").notNullable();
      table.integer("coordenadorId").notNullable();
      table.foreign("coordenadorId").references("id").inTable("coordenadores")
    })
    .createTable("alunosTurmas", (table) => {
      table.increments("id").primary();
      table.string("numeroMatricula").notNullable();
      table.integer("turmaId").notNullable();
      table.foreign("numeroMatricula").references("numeroMatricula").inTable("alunos")
      table.foreign("turmaId").references("id").inTable("turmas")

    })
    .createTable("admins", (table) => {
      table.increments("id").unique().primary();
      table.string("emailUsuario").notNullable().unique();
      table.foreign("emailUsuario").references("email").inTable("usuarios")
    })
    .createTable("propostas", (table) => {
      table.increments("id").primary();
      table.string("titulo").notNullable();
      table.string("coordenador").notNullable();
      table.string("coorientador");
      table.string("caminhoArquivo").notNullable();
      table.text("resumo").notNullable();
      table.string("palavrasChave").notNullable();
      table.integer("turmaId").notNullable();
      table.string("numeroMatriculaAluno").notNullable();
      table.string("numeroServidorOrientador").notNullable();
      table.foreign("numeroMatriculaAluno").references("numeroMatricula").inTable("alunos")
      table.foreign("turmaId").references("id").inTable("turmas")
      table.foreign("numeroServidorOrientador").references("numeroServidor").inTable("professores")
    })
    .createTable("revisoes", (table) => {
      table.increments("id").notNullable().primary();
      table.integer("propostaId").notNullable();
      table.date("revisadoEm").notNullable();
      table.enu("apresentacao", respostasEnum).notNullable();
      table.enu("relevancia", respostasEnum).notNullable();
      table.enu("metodologia", respostasEnum).notNullable();
      table.bool("foiAdequado").notNullable();
      table.enu("planoDeTrabalho", planoRespostasEnum);
      table.bool("foiAprovado").notNullable();
      table.text("resumo").notNullable();
      table.text("pontosFortes").notNullable();
      table.text("pontosFracos").notNullable();
      table.text("detalhamento").notNullable();
      table.string("numeroServidorRevisor").notNullable();
      table.foreign("numeroServidorRevisor").references("numeroServidor").inTable("professores")
      table.foreign("propostaId").references("id").inTable("propostas")
    });

exports.down = (knex) =>
  knex.schema
    .dropTableIfExists("revisoes")
    .dropTableIfExists("propostas")
    .dropTableIfExists("admins")
    .dropTableIfExists("alunosTurmas")
    .dropTableIfExists("turmas")
    .dropTableIfExists("coordenadores")
    .dropTableIfExists("professores")
    .dropTableIfExists("alunos")
    .dropTableIfExists("usuarios");
