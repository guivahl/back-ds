exports.seed = async (knex) => {
  const classes = [
    {
      id: 1,
      name: 'tcc1 2021/2',
      startDate: '28/01/2021',
      endDate: '30/04/2021',
      submissionStartDate: '15/02/2021',
      submissionEndDate: '01/03/2021',
      evaluationStartDate: '02/03/2021',
      evaluationEndDate: '18/03/2021',
      resubmissionStartDate: '19/03/2021',
      resubmissionEndDate: '03/04/2021',
      reevaluationStartDate: '04/04/2021',
      reevaluationEndDate: '18/04/2021',
      coordinatorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      id: 2,
      name: 'tcc1 2022/2',
      startDate: '28/01/2022',
      endDate: '30/04/2022',
      submissionStartDate: '15/02/2022',
      submissionEndDate: '01/03/2022',
      evaluationStartDate: '02/03/2022',
      evaluationEndDate: '18/03/2022',
      resubmissionStartDate: '19/03/2022',
      resubmissionEndDate: '03/04/2022',
      reevaluationStartDate: '04/04/2022',
      reevaluationEndDate: '18/04/2022',
      coordinatorEmail: 'ldsfreitas@inf.ufpel.edu.br',
    },
  ];

  await knex('classes').del();

  await knex('classes').insert(classes);
};
