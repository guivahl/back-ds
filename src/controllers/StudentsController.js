const Student = require('../models/Student');
const Proposal = require('../models/Proposal');
const User = require('../models/User');
const HashService = require('../services/HashService');

const ProposalService = require('../services/ProposalService');

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
          builder.select('id', 'title', 'coadvisor', 'classId', 'createdAt', 'filePath')
            .orderBy('createdAt');
        },
        filterClass: (builder) => {
          builder.select('name', 'startDate', 'endDate')
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
      const status = proposal.reviews.length <= 0 ? 'Pendente' : ProposalService.proposalStatus(proposal);
      return {
        id: proposal.id,
        title: proposal.title,
        coadvisor: proposal.coadvisor,
        link: proposal.filePath,
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

  async create(request, response) {
    const student = request.body;
    const verifyStudent = await User
      .query()
      .findById(student.email);

    if (verifyStudent) {
      return response.status(400).json({ status: 'Usuário com este email já cadastrado.' });
    }
    const trx = await User.startTransaction();

    await User
      .query(trx)
      .insert({
        email: student.email,
        name: student.name,
        password: HashService.generateHash(student.password),
      });
    const insertStudent = await Student
      .query(trx)
      .insert({ userEmail: student.email, registrationNumber: student.registrationNumber });

    await trx.commit();

    if (!insertStudent) { return response.status(500).json({ status: 'Erro ao adicionar aluno.' }); }

    return response.status(200).json({ status: 'Aluno adicionado com sucesso.' });
  }

  async update(request, response) {
    const student = request.body;
    await User.query().upsertGraph({
      email: student.email,
      name: student.name,
      student: {
        registrationNumber: student.registrationNumber,
      },
    });

    return response.status(200).json({ status: 'Aluno modificado com sucesso.' });
  }

  async delete(request, response) {
    const student = request.body;
    const studentProposals = await Proposal.query()
      .where('studentEmail', student.email);

    if (studentProposals.length > 0) {
      return response.status(400).json({ status: 'Aluno já possui proposta no sistema, não é possível deletar.' });
    }

    await User.query()
      .deleteById(student.email);

    return response.status(200).json({ status: 'Aluno deletado com sucesso.' });
  }
}

module.exports = new StudentsController();
