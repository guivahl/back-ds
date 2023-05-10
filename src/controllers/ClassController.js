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
}

module.exports = new ClassController();
