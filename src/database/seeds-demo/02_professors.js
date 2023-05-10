exports.seed = async (knex) => {
  const professors = [
    { userEmail: 'cfdsantos@inf.ufpel.edu.br', employeeNumber: '12345678' },
    { userEmail: 'larissa@inf.ufpel.edu.br', employeeNumber: '12123434' },
    { userEmail: 'adubois@inf.ufpel.edu.br', employeeNumber: '89893434' },
    { userEmail: 'rafael.torchelsen@inf.ufpel.edu.br', employeeNumber: '00000000' },
    { userEmail: 'marilton@inf.ufpel.edu.br', employeeNumber: '11111111' },
    { userEmail: 'gcorrea@inf.ufpel.edu.br', employeeNumber: '22222222' },
    { userEmail: 'reiser@inf.ufpel.edu.br', employeeNumber: '33333333' },
    { userEmail: 'ulisses@inf.ufpel.edu.br', employeeNumber: '44444444' },

  ];

  await knex('professors').del();

  await knex('professors').insert(professors);
};
