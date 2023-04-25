const Student = require('../models/Student');
const Proposal = require('../models/Proposal');

class StudentsController {
  async proposals(request, response) {
    const { email } = request.auth;

    const today = new Date().toISOString();

    const proposals = await Student
      .query()
      .withGraphJoined('[user(filterUser), classes(filterActiveClass) as activeClass, proposals(filterProposals).[professor(filterProfessor).user(filterUser), class(filterClass),reviews(filterReviews)]]').modifiers({
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
        filterReviews: (builder) => {
          builder.select('id', 'wasApproved');
        },
      })
      .where('proposals.studentEmail', email);

    const proposalsStatus = proposals[0].proposals.map((proposal) => {
      let status = 'Pendente';
      if (proposal.reviews.length !== 0) {
        if (proposal.reviews.some((element) => element.wasApproved === false)) {
          status = 'Reprovado';
        } else if (proposal.reviews.every((element) => element.wasApproved === true)) {
          status = 'Aprovado';
        }
      }

      return {
        id: proposal.id,
        title: proposal.title,
        coadvisor: proposal.coadvisor,
        classId: proposal.classId,
        createdAt: proposal.createdAt,
        professor: proposal.professor,
        class: proposal.class,
        status,
      };
    });

    return response.json({
      userEmail: proposals[0].userEmail,
      userName: proposals[0].user.name,
      proposals: proposalsStatus,
    });
  }

  async getReviewsByProposal(request, response) {
    const { id } = request.params;

    const proposals = await Proposal
      .query()
      .withGraphJoined('reviews.[reviewer.user]')
      .findById(id);

    const reviewFormatted = proposals.reviews.map((review) => ({
      ...review,
      reviewer: review.reviewer.user.name,
    }));
    return response.json({ title: proposals.title, reviews: reviewFormatted });
  }
}

module.exports = new StudentsController();
