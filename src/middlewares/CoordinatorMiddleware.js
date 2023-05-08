const Proposal = require('../models/Proposal');

class CoodinatorMiddleware {
  async checkLinkReviewerToProposal(request, response, next) {
    const { id } = request.params;

    const today = new Date().toISOString();

    const activeClass = await Proposal.relatedQuery('class')
      .for(id)
      .first();

    const evaluationStartDate = new Date(
      activeClass.evaluationStartDate,
    ).toISOString();

    if (today > evaluationStartDate) {
      return response
        .status(400)
        .json({ error: 'Período de alocar revisores expirou' });
    }

    next();
  }
}

module.exports = CoodinatorMiddleware;
