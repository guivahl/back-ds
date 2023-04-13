const Student = require('../models/Student');

class StudentsController {
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
      .orderBy('createdAst', 'desc');

    return response.json(proposals);
  }

  async studentByEmail(request, response) {
    const student = await Student
      .query()
      .withGraphJoined('user')
      .where('userEmail', 'lwtavares@inf.ufpel.edu.br');

    return response.json(student);
  }
}

module.exports = new StudentsController();
