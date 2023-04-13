const Student = require('../models/Student');

class StudentsController {
  async proposals(request, response) {
    const proposals = await Student
      .query()
      .withGraphJoined('[user(filterUser), classes(filterClass), proposals(filterProposals).[professor(filterProfessor).user(filterUser), class(filterClass)]]').modifiers({
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
      })
      .where('proposals.studentEmail', 'lwtavares@inf.ufpel.edu.br');

    return response.json(proposals);
  }
}

module.exports = new StudentsController();
