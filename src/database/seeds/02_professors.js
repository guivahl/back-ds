exports.seed = async (knex) => {
  const professors = [
    { userEmail: 'cfdsantos@inf.ufpel.edu.br', employeeNumber: '12345678' },
    { userEmail: 'ldsfreitas@inf.ufpel.edu.br', employeeNumber: '12123434' },
    { userEmail: 'adubois@inf.ufpel.edu.br', employeeNumber: '89893434' },

  ];

  await knex('professors').del();

  await knex('professors').insert(professors);
};
