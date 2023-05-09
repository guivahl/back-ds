const Review = require('../models/Review');

class CoodinatorController {
  async linkProfessorsToProposal(request, response) {
    const { id } = request.params;

    const { reviewersEmails } = request.body;

    const formattedReview = reviewersEmails.map((reviewerEmail) => ({
      proposalId: id,
      reviewerEmail,
    }));

    const review = await Review.query().insert(formattedReview);

    return response.json(review);
  }
}

module.exports = new CoodinatorController();
