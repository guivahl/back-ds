const Student = require('../models/Student');
const Proposal = require('../models/Proposal');

class ProposalController {
  async create(request, response) {
    const {
      title, advisorEmail, coadvisor, abstract, keywords, filePath = './',
    } = request.body;

    const { email: studentEmail } = request.auth;

    const today = new Date().toISOString();

    const activeClass = (await Student.query().withGraphJoined('classes(filterActiveClass)').modifiers({
      filterActiveClass: (builder) => {
        builder.select('id', 'name')
          .where('startDate', '<', today)
          .where('endDate', '>', today);
      },
    }).findById(studentEmail)).classes[0];

    if (!activeClass) {
      return response.status(400).json({ error: 'Você não está em uma turma ativa' });
    }

    const proposal = await Proposal.query().insert({
      title,
      coadvisor,
      abstract,
      keywords,
      studentEmail,
      advisorEmail,
      classId: activeClass.id,
      filePath,
    });

    return response.json(proposal);
  }
}

module.exports = new ProposalController();