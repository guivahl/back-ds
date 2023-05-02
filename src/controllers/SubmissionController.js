const Student = require('../models/Student');
const Proposal = require('../models/Proposal');
const Review = require('../models/Review');

class SubmissionController {
  async status(request, response) {
    const { email: studentEmail } = request.auth;

    const today = new Date().toISOString();

    const currentStudent = await Student.query().withGraphJoined('classes(filterActiveClass)').modifiers({
      filterActiveClass: (builder) => {
        builder.select('startDate', 'endDate', 'submissionStartDate', 'submissionEndDate', 'resubmissionStartDate', 'resubmissionEndDate', 'id')
          .where('startDate', '<', today)
          .where('endDate', '>', today);
      },
    }).findById(studentEmail);

    const activeClass = currentStudent.classes?.[0];

    if (!activeClass) {
      return response.status(400).json({ error: 'Você não está em uma turma ativa' });
    }
    const subStartDate = new Date(activeClass.submissionStartDate).toISOString();
    const subEndDate = new Date(activeClass.submissionEndDate).toISOString();

    if (today > subStartDate && today < subEndDate) {
      const currentProposals = await Proposal.query()
        .where('proposals.classId', activeClass.id)
        .where('proposals.studentEmail', studentEmail);

      if (currentProposals.length === 0) {
        return response.json({ status: 'ta no periodo e não tem proposta, pode enviar' });
      }
      return response.json({ status: 'ta no periodo mas tem propostas, não pode enviar' });
    }

    const resubStartDate = new Date(activeClass.resubmissionStartDate).toISOString();
    const resubEndDate = new Date(activeClass.resubmissionEndDate).toISOString();

    if (today > resubStartDate && today < resubEndDate) {
      const currentProposals = await Proposal.query()
        .where('proposals.classId', activeClass.id)
        .where('proposals.studentEmail', studentEmail);

      if (currentProposals.length === 1) {
        const reviews = await Review.query()
          .where('reviews.proposalId', currentProposals[0].id);
        if (reviews.some((review) => review.wasApproved === false)) {
          return response.json({ status: 'ta no periodo e tem alguma proposta reprovada, pode enviar' });
        }
        return response.json({ status: 'ta no periodo e só tem uma proposta aprovada, nao pode enviar' });
      }
      return response.json({ status: 'periodo de resub, mas nao mandou a primeira, nao pode enviar' });
    }
    return response.json({ status: 'ta fora do periodo de envio' });
  }
}

module.exports = new SubmissionController();
