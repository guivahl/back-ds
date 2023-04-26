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

    let proposals = await Student
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
      .where('proposals.studentEmail', email);
    if (proposals.length === 0) {
      proposals = await Student
        .query()
        .withGraphJoined('[user(filterUser), classes(filterActiveClass) as activeClass]').modifiers({
          filterUser: (builder) => {
            builder.select('name');
          },
          filterProfessor: (builder) => {
            builder.select('userEmail');
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
        .where('user.email', email);

      return response.json({
        userEmail: proposals[0].userEmail,
        userName: proposals[0].user.name,
        activeClass: proposals[0].activeClass,
        proposals: [],
      });
    }

    const proposalsStatus = proposals[0].proposals.map((proposal) => {
      const status = proposalStatus(proposal);
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
      activeClass: proposals[0].activeClass,
      proposals: proposalsStatus,
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
