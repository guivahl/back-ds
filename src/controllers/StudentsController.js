const Student = require('../models/Student');
// const User = require('../models/User');

// const HashService = require('../services/HashService');
// const AuthService = require('../services/AuthService');

class StudentsController {
  async index(request, response) {
    const proposals = await Student.query();
    return response.json(proposals);
  }

  async proposals(request, response) {
    const proposals = await Student
      .query()
      .withGraphJoined('[user(filterUser), proposals(filterProposals).professor(filterProfessor).user(filterUser)]').modifiers({
        filterUser: (builder) => {
          builder.select('name');
        },
        filterProfessor: (builder) => {
          builder.select('userEmail');
        },
        filterProposals: (builder) => {
          builder.select('id', 'title', 'coadvisor', 'classId', 'created_at');
        },
      })
      .where('studentEmail', 'lwtavares@inf.ufpel.edu.br')
      .orderBy('created_at', 'desc');

    return response.json(proposals);
  }

  async studentByEmail(request, response) {
    // const { userEmail } = request.params;

    const student = await Student
      .query()
      .withGraphJoined('user')
      .where('userEmail', 'lwtavares@inf.ufpel.edu.br');

    return response.json(student);
  }
}

module.exports = new StudentsController();
