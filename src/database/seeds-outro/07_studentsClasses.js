exports.seed = async (knex) => {
  const studentsClasses = [
    { studentEmail: 'lwtavares@inf.ufpel.edu.br', classId: 1 },
    { studentEmail: 'lwtavares@inf.ufpel.edu.br', classId: 2 },
    { studentEmail: 'lwtavares@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'marcelo.sdias@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'gdsvahl@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'argalvao@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'mamota@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'ldsguths@inf.ufpel.edu.br', classId: 3 },
    { studentEmail: 'testeenviosubmissao1@inf.ufpel.edu.br', classId: 5 },
    { studentEmail: 'testeenviosubmissao2@inf.ufpel.edu.br', classId: 6 },
    { studentEmail: 'testeenviosubmissao3@inf.ufpel.edu.br', classId: 7 },
  ];

  await knex('studentsClasses').del();

  await knex('studentsClasses').insert(studentsClasses);
};
