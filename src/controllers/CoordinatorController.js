const Review = require('../models/Review');

class CoodinatorController {
  async linkProfessorsToProposal(request, response) {
    const { id } = request.params;

    const { emails } = request.body;

    const formattedReview = emails.map((item) => ({
      reviewerEmail: item,
      proposalId: id,
    }));

    const review = await Review.query().insert(formattedReview);

    return response.json(review);
  }
}

module.exports = new CoodinatorController();
