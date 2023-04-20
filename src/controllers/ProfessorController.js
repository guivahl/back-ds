const Proposal = require('../models/Proposal');
const User = require('../models/User');

class ProfessorController {
  async index(request, response) {
    const professors = await User.query().innerJoin('professors', 'professors.userEmail', 'users.email')
      .select('users.*', 'professors.employeeNumber');
    return response.json(professors);
  }

  async getProposalsToReview(request, response) {
    const { email } = request.auth;

    const proposals = await Proposal.query().withGraphJoined('[student.user(filterUser), reviews.reviewer.user(filterUser)]')
      .modifiers({
        filterUser: (builder) => {
          builder.select('users.name');
        },
      })
      .where('reviews.reviewerEmail', '=', email)
      .select('proposals.id', 'proposals.title', 'proposals.createdAt');

    response.json(proposals);
  }
}

module.exports = new ProfessorController();
