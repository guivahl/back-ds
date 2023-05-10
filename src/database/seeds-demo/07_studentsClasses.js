exports.seed = async (knex) => {
  const studentsClasses = [
    { studentEmail: 'lwtavares@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'lwtavares@inf.ufpel.edu.br', classId: 2 },
    { studentEmail: 'marcelo.sdias@inf.ufpel.edu.br', classId: 1 },
    { studentEmail: 'gdsvahl@inf.ufpel.edu.br', classId: 4 },
    { studentEmail: 'mamota@inf.ufpel.edu.br', classId: 1 },
    { studentEmail: 'ldsguths@inf.ufpel.edu.br', classId: 1 },
  ];

  await knex('studentsClasses').del();

  await knex('studentsClasses').insert(studentsClasses);
};
