const User = require('../models/User');

class ProfessorController {
  async index(request, response) {
    const professors = await User.query().innerJoin('professors', 'professors.userEmail', 'users.email')
      .select('users.*', 'professors.employeeNumber');
    return response.json(professors);
  }
}

module.exports = new ProfessorController();
