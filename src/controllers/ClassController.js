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
    const students = classInfo.students.split(';').filter((e) => e !== '');
    const trx = await Class.startTransaction();

    const { id: classId } = await Class
      .query(trx)
      .insert({
        name: classInfo.name,
        startDate: classInfo.startDate,
        endDate: classInfo.endDate,
        submissionStartDate: classInfo.submissionStartDate,
        submissionEndDate: classInfo.submissionEndDate,
        evaluationStartDate: classInfo.evaluationStartDate,
        evaluationEndDate: classInfo.evaluationEndDate,
        resubmissionStartDate: classInfo.resubmissionStartDate,
        resubmissionEndDate: classInfo.resubmissionEndDate,
        reevaluationStartDate: classInfo.reevaluationStartDate,
        reevaluationEndDate: classInfo.reevaluationEndDate,
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

    await Class.query().upsertGraph({
      id: classInfo.classId,
      startDate: classInfo.startDate,
      endDate: classInfo.endDate,
      submissionStartDate: classInfo.submissionStartDate,
      submissionEndDate: classInfo.submissionEndDate,
      evaluationStartDate: classInfo.evaluationStartDate,
      evaluationEndDate: classInfo.evaluationEndDate,
      resubmissionStartDate: classInfo.resubmissionStartDate,
      resubmissionEndDate: classInfo.resubmissionEndDate,
      reevaluationStartDate: classInfo.reevaluationStartDate,
      reevaluationEndDate: classInfo.reevaluationEndDate,
    });

    return response.status(200).json({ status: 'Truma modificada com sucesso.' });
  }
}

module.exports = new ClassController();
