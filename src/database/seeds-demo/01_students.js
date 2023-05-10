exports.seed = async (knex) => {
  const alunos = [
    { userEmail: 'gdsvahl@inf.ufpel.edu.br', registrationNumber: '19100784' },
    { userEmail: 'marcelo.sdias@inf.ufpel.edu.br', registrationNumber: '19100793' },
    { userEmail: 'lwtavares@inf.ufpel.edu.br', registrationNumber: '19100824' },
    { userEmail: 'argalvao@inf.ufpel.edu.br', registrationNumber: '19100359' },
    { userEmail: 'mamota@inf.ufpel.edu.br', registrationNumber: '19101316' },
    { userEmail: 'ldsguths@inf.ufpel.edu.br', registrationNumber: '19100392' },
    { userEmail: 'bdsvolcan@inf.ufpel.edu.br', registrationNumber: '19100280' },
  ];

  await knex('students').del();

  await knex('students').insert(alunos);
};
