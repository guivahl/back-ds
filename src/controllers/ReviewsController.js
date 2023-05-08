const Review = require("../models/Review");

class ReviewController {
  async getOne(request, response) {
    const { id } = request.params;

    const review = await Review
      .query()
      .findById(id);

    return response.json(review);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      summary,
      strengths,
      weaknesses,
      details,
      presentation,
      relevance,
      methodology,
      wasAdequate,
      workPlan,
      wasApproved,
    } = request.body;
    
    const today = new Date().toISOString();

    /* to-do: checar se esta no periodo de revisão */

    const review = await Review.query().update({
      reviewedOn: today,
      presentation,
      relevance,
      methodology,
      wasAdequate,
      wasApproved,
      workPlan,
      summary,
      strengths,
      weaknesses,
      details,
    }).where('id', id);

    return response.json(review);
  }
}

module.exports = new ReviewController();
