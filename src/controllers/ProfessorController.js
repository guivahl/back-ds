const Proposal = require('../models/Proposal');
const User = require('../models/User');
const Class = require('../models/Class');

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

  async getAllClasses(request, response) {
    const { email } = request.auth;

    const coordinator = await Class
      .query()
      .innerJoin('professors', 'professors.userEmail', 'classes.coordinatorEmail')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .where('professors.userEmail', email);

    const advisor = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .innerJoin('professors', 'professors.userEmail', 'proposals.advisorEmail')
      .where('professors.userEmail', email)
      .groupBy('classes.id');

    const reviewer = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .innerJoin('reviews', 'reviews.proposalId', 'proposals.id')
      .innerJoin('professors', 'professors.userEmail', 'reviews.reviewerEmail')
      .where('professors.userEmail', email)
      .groupBy('classes.id');

    return response.json({
      coordinatorClasses: coordinator,
      advisorClasses: advisor,
      reviewerClasses: reviewer,
    });
  }
}

module.exports = new ProfessorController();
