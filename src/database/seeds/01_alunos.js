exports.seed = async function (knex) {
  const alunos = [
    { emailUsuario: 'gdsvahl@inf.ufpel.edu.br', numeroMatricula: '19100784' },
    { emailUsuario: 'marcelo.sdias@inf.ufpel.edu.br', numeroMatricula: '19100793' },
  ];

  await knex('alunos').del();

  await knex('alunos').insert(alunos);
};
