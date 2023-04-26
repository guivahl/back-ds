exports.seed = async (knex) => {
  const classes = [
    {
      name: 'tcc1 2021/1',
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
      name: 'tcc1 2021/2',
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
      coordinatorEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      name: 'tcc1 2022/2',
      startDate: '30/01/2023',
      endDate: '13/05/2023',
      submissionStartDate: '12/03/2023',
      submissionEndDate: '19/03/2023',
      evaluationStartDate: '20/03/2023',
      evaluationEndDate: '27/03/2023',
      resubmissionStartDate: '27/03/2023',
      resubmissionEndDate: '02/04/2023',
      reevaluationStartDate: '03/04/2023',
      reevaluationEndDate: '10/04/2023',
      coordinatorEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      name: 'tcc1 2023/1',
      startDate: '12/06/2023',
      endDate: '30/12/2023',
      submissionStartDate: '01/07/2023',
      submissionEndDate: '07/07/2023',
      evaluationStartDate: '08/07/2023',
      evaluationEndDate: '15/07/2023',
      resubmissionStartDate: '16/07/2023',
      resubmissionEndDate: '23/07/2023',
      reevaluationStartDate: '24/07/2023',
      reevaluationEndDate: '31/07/2023',
      coordinatorEmail: 'larissa@inf.ufpel.edu.br',
    },
  ];

  await knex('classes').del();

  await knex('classes').insert(classes);
};
