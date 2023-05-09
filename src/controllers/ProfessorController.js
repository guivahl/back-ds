const Proposal = require('../models/Proposal');
const User = require('../models/User');
const Class = require('../models/Class');

const ProposalService = require('../services/ProposalService');

class ProfessorController {
  async index(request, response) {
    const professors = await User.query().innerJoin('professors', 'professors.userEmail', 'users.email')
      .select('users.*', 'professors.employeeNumber')
      .orderBy('name');
    return response.json(professors);
  }

  async getProposalsToReview(request, response) {
    const { email } = request.auth;
    const { id: turmaId } = request.params;

    const proposalsData = await Proposal.query().withGraphJoined('[class, student.user(filterUser), reviews.reviewer.user(filterUser)]')
      .modifiers({
        filterUser: (builder) => {
          builder.select('users.name');
        },
      })
      .where('reviews.reviewerEmail', '=', email)
      .where('proposals.classId', turmaId)
      .orderBy([
        { column: 'reviews.wasApproved', order: 'desc' },
        { column: 'proposals.createdAt', order: 'desc' },
      ]);

    proposalsData.forEach((proposal) => {
      const status = proposal.reviews.length <= 0 ? 'Pendente' : ProposalService.proposalStatus(proposal);

      proposal.status = status
    });

    return response.json(proposalsData);
  }

  async getProposalsToCoordinate(request, response) {
    const { email } = request.auth;
    const { id: turmaId } = request.params;

    const proposals = await Proposal.query()
      .withGraphJoined('[class(filterClass), reviews.reviewer.user]', { joinOperation: 'innerJoin' })
      .modifiers({
        filterClass: (builder) => {
          builder.where('classes.coordinatorEmail', email);
        },
      })
      .where('proposals.classId', turmaId)
      .orderBy([
        { column: 'reviews.wasApproved', order: 'desc' },
        { column: 'proposals.createdAt', order: 'desc' },
      ]);

    return response.json(proposals);
  }

  async getProposalsToAdvise(request, response) {
    const { email } = request.auth;
    const { id: turmaId } = request.params;

    const proposalsData = await Proposal.query().withGraphJoined('[class, student.user(filterUser), reviews.reviewer.user(filterUser)]')
      .modifiers({
        filterUser: (builder) => {
          builder.select('users.name');
        },
      }) 
      .where('proposals.advisorEmail', '=', email)
      .where('proposals.classId', turmaId)
      .orderBy([
        { column: 'reviews.wasApproved', order: 'desc' },
        { column: 'proposals.createdAt', order: 'desc' },
      ]);

    proposalsData.forEach((proposal) => {
      const status = proposal.reviews.length <= 0 ? 'Pendente' : ProposalService.proposalStatus(proposal);
  
      proposal.status = status
    });
  
      return response.json(proposalsData);
  }

  async getAllClasses(request, response) {
    const { email } = request.auth;

    const coordinator = await Class
      .query()
      .innerJoin('professors', 'professors.userEmail', 'classes.coordinatorEmail')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .where('professors.userEmail', email)
      .orderBy('classes.endDate', 'desc');

    const advisor = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .innerJoin('professors', 'professors.userEmail', 'proposals.advisorEmail')
      .where('professors.userEmail', email)
      .orderBy('classes.endDate', 'desc')
      .groupBy('classes.id');

    const reviewer = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select('classes.id', 'classes.name', 'classes.startDate', 'classes.endDate')
      .innerJoin('reviews', 'reviews.proposalId', 'proposals.id')
      .innerJoin('professors', 'professors.userEmail', 'reviews.reviewerEmail')
      .where('professors.userEmail', email)
      .orderBy('classes.endDate', 'desc')
      .groupBy('classes.id');

    return response.json({
      coordinatorClasses: coordinator,
      advisorClasses: advisor,
      reviewerClasses: reviewer,
    });
  }
}

module.exports = new ProfessorController();
