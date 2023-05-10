const Proposal = require('../models/Proposal');
const User = require('../models/User');
const Class = require('../models/Class');
const Professor = require('../models/Professor');
const Review = require('../models/Review');
const HashService = require('../services/HashService');

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

      proposal.status = status;
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

      proposal.status = status;
    });

    return response.json(proposalsData);
  }

  async getAllClasses(request, response) {
    const { email } = request.auth;

    const coordinator = await Class
      .query()
      .innerJoin('professors', 'professors.userEmail', 'classes.coordinatorEmail')
      .select(
        'classes.id',
        'classes.name',
        'classes.startDate',
        'classes.endDate',
        'classes.evaluationStartDate',
        'classes.evaluationEndDate',
      )
      .where('professors.userEmail', email)
      .orderBy('classes.endDate', 'desc');

    const advisor = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select(
        'classes.id',
        'classes.name',
        'classes.startDate',
        'classes.endDate',
        'classes.evaluationStartDate',
        'classes.evaluationEndDate',
      )
      .innerJoin('professors', 'professors.userEmail', 'proposals.advisorEmail')
      .where('professors.userEmail', email)
      .orderBy('classes.endDate', 'desc')
      .groupBy('classes.id');

    const reviewer = await Class
      .query()
      .innerJoin('proposals', 'proposals.classId', 'classes.id')
      .select(
        'classes.id',
        'classes.name',
        'classes.startDate',
        'classes.endDate',
        'classes.evaluationStartDate',
        'classes.evaluationEndDate',
      )
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

  async create(request, response) {
    const professor = request.body;
    const verifyProfessor = await User
      .query()
      .findById(professor.email);

    if (verifyProfessor) {
      return response.status(400).json({ status: 'Usuário com este email já cadastrado.' });
    }
    const trx = await User.startTransaction();

    await User
      .query(trx)
      .insert({
        email: professor.email,
        name: professor.name,
        password: HashService.generateHash(professor.password),
      });
    const insertProfessor = await Professor
      .query(trx)
      .insert({ userEmail: professor.email, employeeNumber: professor.employeeNumber });

    await trx.commit();

    if (!insertProfessor) { return response.status(500).json({ status: 'Erro ao adicionar professor.' }); }

    return response.status(200).json({ status: 'Professor adicionado com sucesso.' });
  }

  async update(request, response) {
    const professor = request.body;
    await User.query().upsertGraph({
      email: professor.email,
      name: professor.name,
      professor: {
        employeeNumber: professor.employeeNumber,
      },
    });

    return response.status(200).json({ status: 'Professor modificado com sucesso.' });
  }

  async delete(request, response) {
    const professor = request.body;

    const professorExists = await User.query()
      .where('email', professor.email);

    if (professorExists.length === 0) {
      return response.status(400).json({ status: 'Professor não encontrado.' });
    }
    const professorProposals = await Proposal.query()
      .where('advisorEmail', professor.email);

    if (professorProposals.length > 0) {
      return response.status(400).json({ status: 'Professor já possui vínculo uma ou mais propostas no sistema, não é possível deletar.' });
    }

    const professorReviews = await Review.query()
      .where('reviewerEmail', professor.email);

    if (professorReviews.length > 0) {
      return response.status(400).json({ status: 'Professor já possui vínculo uma ou mais revisões no sistema, não é possível deletar.' });
    }

    const professorClasses = await Class.query()
      .where('coordinatorEmail', professor.email);

    if (professorClasses.length > 0) {
      return response.status(400).json({ status: 'Professor já possui vínculo uma ou mais turmas no sistema, não é possível deletar.' });
    }

    await User.query()
      .deleteById(professor.email);

    return response.status(200).json({ status: 'Professor deletado com sucesso.' });
  }
}

module.exports = new ProfessorController();
