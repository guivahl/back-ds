const { BAD_GATEWAY } = require('http-status-codes');
const Class = require('../models/Class');

class ClassController {
  async getByReviews(request, response) {
    const { email: reviewerEmail } = request.auth;

    const classes = await Class.query()
      .select('classes.*')
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .innerJoin('reviews', 'reviews.proposalId', 'proposals.id')
      .where('reviews.reviewerEmail', '=', reviewerEmail)
      .orderBy('endDate', 'desc');

    return response.json(classes);
  }

  async getByCoordinators(request, response) {
    const { email: reviewerEmail } = request.auth;

    const classes = await Class.query()
      .where('coordinatorEmail', '=', reviewerEmail)
      .orderBy('endDate', 'desc');

    return response.json(classes);
  }

  async create(request, response) {
    const { email: professorEmail } = request.auth;
    const classInfo = request.body;
    const dates = classInfo.dates.split(';');
    const students = classInfo.students.split(';');
    const trx = await Class.startTransaction();

    const { id: classId } = await Class
      .query(trx)
      .insert({
        name: classInfo.name,
        startDate: dates[0],
        endDate: dates[1],
        submissionStartDate: dates[2],
        submissionEndDate: dates[3],
        evaluationStartDate: dates[4],
        evaluationEndDate: dates[5],
        resubmissionStartDate: dates[6],
        resubmissionEndDate: dates[7],
        reevaluationStartDate: dates[8],
        reevaluationEndDate: dates[9],
        coordinatorEmail: professorEmail,
      })
      .returning('*');
    await Class.relatedQuery('students', trx)
      .for(
        classId,
      )
      .relate(students);
    await trx.commit();

    return response.status(200).json({ status: 'Turma adicionada com sucesso.' });
  }

  async update(request, response) {
    const classInfo = request.body;
    const dates = classInfo.dates.split(';');

    await Class.query().upsertGraph({
      id: classInfo.classId,
      name: classInfo.name,
      startDate: dates[0],
      endDate: dates[1],
      submissionStartDate: dates[2],
      submissionEndDate: dates[3],
      evaluationStartDate: dates[4],
      evaluationEndDate: dates[5],
      resubmissionStartDate: dates[6],
      resubmissionEndDate: dates[7],
      reevaluationStartDate: dates[8],
      reevaluationEndDate: dates[9],
    });

    return response.status(200).json({ status: 'Truma modificada com sucesso.' });
  }
}

module.exports = new ClassController();
