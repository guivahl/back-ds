const Student = require('../models/Student');
const Proposal = require('../models/Proposal');
const Review = require('../models/Review');

class ProposalMiddleware {
  async checkSubmitProposalPossibility(request, response, next) {
    const { email: studentEmail } = request.auth;

    const today = new Date().toISOString();

    const currentStudent = await Student.query()
      .withGraphJoined('classes(filterActiveClass)')
      .modifiers({
        filterActiveClass: (builder) => {
          builder
            .select(
              'startDate',
              'endDate',
              'submissionStartDate',
              'submissionEndDate',
              'resubmissionStartDate',
              'resubmissionEndDate',
              'id',
            )
            .where('startDate', '<', today)
            .where('endDate', '>', today);
        },
      })
      .findById(studentEmail);

    const activeClass = currentStudent.classes?.[0];

    if (!activeClass) {
      return response
        .status(400)
        .json({ error: 'Você não está em uma turma ativa' });
    }
    const currentProposals = await Proposal.query()
      .where('proposals.classId', activeClass.id)
      .where('proposals.studentEmail', studentEmail);

    if (currentProposals.length === 0) {
      const subStartDate = new Date(
        activeClass.submissionStartDate,
      ).toISOString();
      const subEndDate = new Date(activeClass.submissionEndDate).toISOString();

      if (!(today > subStartDate && today < subEndDate)) {
        return response
          .status(400)
          .json({ error: 'Periodo de submissão expirou' });
      }
    }
    // console.log(currentProposals);
    if (currentProposals.length === 1) {
      const resubStartDate = new Date(
        activeClass.resubmissionStartDate,
      ).toISOString();
      const resubEndDate = new Date(
        activeClass.resubmissionEndDate,
      ).toISOString();

      const reviews = await Review.query().where(
        'reviews.proposalId',
        currentProposals[0].id,
      );
      // console.log(reviews);

      const wasProposalApproved = reviews.length > 0 && reviews.every((review) => review.wasApproved);

      // console.log(wasProposalApproved);
      if (wasProposalApproved) {
        return response
          .status(400)
          .json({ error: 'Sua proposta já foi aprovado' });
      }

      if (!(today > resubStartDate && today < resubEndDate)) {
        return response
          .status(400)
          .json({ error: 'Periodo de resubmissao expirou' });
      }
    }

    if (currentProposals.length === 2) {
      return response
        .status(400)
        .json({
          error:
              'Limite de propostas atingido.',
        });
    }
    next();
  }
}

module.exports = new ProposalMiddleware();
