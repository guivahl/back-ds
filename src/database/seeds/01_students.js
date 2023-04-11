exports.seed = async (knex) => {
  const alunos = [
    { userEmail: 'gdsvahl@inf.ufpel.edu.br', registrationNumber: '19100784' },
    { userEmail: 'marcelo.sdias@inf.ufpel.edu.br', registrationNumber: '19100793' },
  ];

  await knex('students').del();

  await knex('students').insert(alunos);
};
