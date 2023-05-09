const Review = require('../models/Review');

class CoodinatorController {
  async linkProfessorsToProposal(request, response) {
    const { id } = request.params;

    const { reviewersEmails } = request.body;

    const formattedReview = reviewersEmails.map((reviewerEmail) => ({
      proposalId: id,
      reviewerEmail,
    }));

    const trx = await Review.startTransaction();

    await Review.query(trx).delete()
      .where({ proposalId: id });

    const review = await Review.query(trx).insert(formattedReview);

    await trx.commit();

    return response.json(review);
  }
}

module.exports = new CoodinatorController();
