const Student = require('../models/Student');
const Proposal = require('../models/Proposal');

class ProposalController {
  async create(request, response) {
    const {
      title, advisorEmail, coadvisor, abstract, keywords, filePath = './',
    } = request.body;

    const { email } = request.auth;

    const today = new Date().toISOString();

    const { id: classId } = (await Student.query().withGraphJoined('classes(filterActiveClass)').modifiers({
      filterActiveClass: (builder) => {
        builder.select('id', 'name')
          .where('startDate', '<', today)
          .where('endDate', '>', today);
      },
    }).findById(email)).classes[0];

    const proposal = await Proposal.query().insert({
      title,
      coadvisor,
      abstract,
      keywords,
      studentEmail: email,
      advisorEmail,
      classId,
      filePath,
    });

    return response.json(proposal);
  }
}

module.exports = new ProposalController();
