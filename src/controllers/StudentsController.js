const Student = require('../models/Student');

class StudentsController {
  async proposals(request, response) {
    const { email } = request.auth;

    let today = new Date();
    today = today.toISOString();

    const proposals = await Student
      .query()
      .withGraphJoined('[user(filterUser), classes(filterActiveClass), proposals(filterProposals).[professor(filterProfessor).user(filterUser), class(filterClass)]]').modifiers({
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
      })
      .where('proposals.studentEmail', email);

    return response.json(proposals);
  }
}

module.exports = new StudentsController();
