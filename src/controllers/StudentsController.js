const Student = require('../models/Student');
const Review = require('../models/Review');
const Proposal = require('../models/Proposal');


class StudentsController {
  async proposals(request, response) {
    const { email } = request.auth;

    const today = new Date().toISOString();

    const proposals = await Student
      .query()
      .withGraphJoined('[user(filterUser), classes(filterActiveClass) as activeClass, proposals(filterProposals).[professor(filterProfessor).user(filterUser), class(filterClass)]]').modifiers({
        filterUser: (builder) => {
          builder.select('name');
        },
        filterProfessor: (builder) => {
          builder.select('userEmail');
        },
        filterProposals: (builder) => {
          builder.select('id', 'title', 'coadvisor', 'classId', 'createdAt')
            .orderBy('createdAt', 'desc');
        },
        filterClass: (builder) => {
          builder.select('name', 'startDate')
            .orderBy('startDate', 'desc');
        },
        filterActiveClass: (builder) => {
          builder.select('name', 'startDate')
            .where('startDate', '<', today)
            .where('endDate', '>', today);
        },
      })
      .where('proposals.studentEmail', email);

    return response.json(proposals);
  }

  async specificProposal(request, response) {
    const { email } = request.auth;
    const id = request.params.id;

    const today = new Date().toISOString();

    const proposals = await Proposal
      .query().findById(id)
      .withGraphJoined('reviews.[reviewer.user]');

      const reviewFormatted = proposals.reviews.map(review => ({
        ...review,
        reviewer: review.reviewer.user.name
      }))
    return response.json({id: proposals.id, title: proposals.title, reviews:proposals.reviews, reviews: reviewFormatted});
  }
}

module.exports = new StudentsController();
