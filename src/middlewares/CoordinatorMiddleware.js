const Proposal = require('../models/Proposal');

class CoordinatorMiddleware {
  static async checkLinkReviewerToProposal(request, response, next) {
    const { id } = request.params;

    const today = new Date().toISOString();

    const selectedClass = await Proposal.relatedQuery('class')
      .for(id)
      .first();

    const evaluationStartDate = new Date(
      selectedClass.evaluationStartDate,
    ).toISOString();

    if (today > evaluationStartDate) {
      return response
        .status(400)
        .json({ error: 'Período de alocar revisores expirou' });
    }

    next();
  }
}

module.exports = CoordinatorMiddleware;
