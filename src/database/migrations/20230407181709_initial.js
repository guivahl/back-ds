const answersEnum = [
  '1 - Insuficiente',
  '2 - Regular',
  '3 - Bom',
  '4 - Excelente',
];

const answersPlanEnum = [
  '1 - Mal especificado e/ou não exequível',
  '2 - Exequível',
  '3 - Muito bem especificado e exequível',
];

exports.up = (knex) => knex.schema
  .createTable('users', (table) => {
    table.string('email').notNullable().unique().primary();
    table.string('name').notNullable();
    table.string('password').notNullable();
  })
  .createTable('students', (table) => {
    table.string('userEmail').notNullable().unique().primary();
    table.string('registrationNumber').notNullable().unique();
    table.foreign('userEmail').references('email').inTable('users').onDelete('CASCADE');
  })
  .createTable('professors', (table) => {
    table.string('userEmail').notNullable().unique().primary();
    table.string('employeeNumber').notNullable().unique();
    table.foreign('userEmail').references('email').inTable('users').onDelete('CASCADE');
  })
  .createTable('classes', (table) => {
    table.increments('id').notNullable().primary();
    table.string('name').notNullable();
    table.date('startDate').notNullable();
    table.date('endDate').notNullable();
    table.date('submissionStartDate').notNullable();
    table.date('submissionEndDate').notNullable();
    table.date('evaluationStartDate').notNullable();
    table.date('evaluationEndDate').notNullable();
    table.date('resubmissionStartDate').notNullable();
    table.date('resubmissionEndDate').notNullable();
    table.date('reevaluationStartDate').notNullable();
    table.date('reevaluationEndDate').notNullable();
    table.string('coordinatorEmail').notNullable();
    table.foreign('coordinatorEmail').references('userEmail').inTable('professors').onDelete('CASCADE');
  })
  .createTable('studentsClasses', (table) => {
    table.string('studentEmail').notNullable().primary();
    table.integer('classId').notNullable();
    table.foreign('studentEmail').references('userEmail').inTable('students').onDelete('CASCADE');
    table.foreign('classId').references('id').inTable('classes').onDelete('CASCADE');
  })
  .createTable('admins', (table) => {
    table.string('userEmail').notNullable().unique().primary();
    table.foreign('userEmail').references('email').inTable('users').onDelete('CASCADE');
  })
  .createTable('proposals', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('coadvisor');
    table.string('filePath').notNullable();
    table.text('abstract').notNullable();
    table.string('keywords').notNullable();
    table.integer('classId').notNullable();
    table.string('studentEmail').notNullable();
    table.string('advisorEmail').notNullable();
    table.foreign('studentEmail').references('userEmail').inTable('students').onDelete('CASCADE');
    table.foreign('classId').references('id').inTable('classes').onDelete('CASCADE');
    table.foreign('advisorEmail').references('userEmail').inTable('professors').onDelete('CASCADE');
  })
  .createTable('reviews', (table) => {
    table.increments('id').notNullable().primary();
    table.integer('proposalId').notNullable();
    table.date('reviewedOn').notNullable();
    table.enu('presentation', answersEnum).notNullable();
    table.enu('relevance', answersEnum).notNullable();
    table.enu('methodology', answersEnum).notNullable();
    table.boolean('wasAdequate').notNullable();
    table.enu('workPlan', answersPlanEnum).notNullable();
    table.boolean('wasApproved').notNullable();
    table.text('summary').notNullable();
    table.text('strengths').notNullable();
    table.text('weaknesses').notNullable();
    table.text('details').notNullable();
    table.string('reviewerEmail').notNullable();
    table.foreign('reviewerEmail').references('userEmail').inTable('professors').onDelete('CASCADE');
    table.foreign('proposalId').references('id').inTable('proposals');
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('reviews')
  .dropTableIfExists('proposals')
  .dropTableIfExists('admins')
  .dropTableIfExists('studentsClasses')
  .dropTableIfExists('classes')
  .dropTableIfExists('professors')
  .dropTableIfExists('students')
  .dropTableIfExists('users');
