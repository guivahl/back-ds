const Student = require('../models/Student');
const Proposal = require('../models/Proposal');

const proposalStatus = (proposal) => {
  if (proposal.reviews.length <= 0) return 'Pendente';

  if (proposal.reviews.some((element) => element.wasApproved === false)) return 'Reprovado';
  if (proposal.reviews.every((element) => element.wasApproved === true)) return 'Aprovado';

  return 'Pendente';
};

class StudentsController {
  async proposals(request, response) {
    const { email } = request.auth;

    const today = new Date().toISOString();

    const [studentData] = await Student
      .query()
      .withGraphJoined('[user(filterUser), classes(filterActiveClass) as activeClass, proposals(filterProposals).[professor(filterProfessor).user(filterUser), class(filterClass), reviews(filterReviews)]]').modifiers({
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
      .where('students.userEmail', email);

    const proposals = studentData.proposals.map((proposal) => {
      const status = proposal.reviews.length <= 0 ? 'Pendente' : proposalStatus(proposal);
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
      userEmail: studentData.userEmail,
      userName: studentData.user.name,
      activeClass: studentData.activeClass,
      proposals,
    });
  }

  async getReviewsByProposal(request, response) {
    const { id } = request.params;

    const proposals = await Proposal
      .query()
      .withGraphJoined('reviews(getReviewerName)')
      .findById(id);

    return response.json(proposals);
  }
}

module.exports = new StudentsController();
