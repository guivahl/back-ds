const User = require('../models/User');
const Professor = require('../models/Professor');
const Class = require('../models/Class');

class ProfessorController {
  async index(request, response) {
    const professors = await User.query().innerJoin('professors', 'professors.userEmail', 'users.email')
      .select('users.*', 'professors.employeeNumber');
    return response.json(professors);
  }

  async getAllClasses(request, response) {
    const { email } = request.auth;

    const coordinator = await Professor
      .query()
      .withGraphJoined('[classes as coordinatorClasses]')
      .findById(email);

    const advisorClasses = await Class
      .query()
      .withGraphJoined('proposals.professor')
      .where('advisorEmail', email);

    const reviewerClasses = await Class
      .query()
      .withGraphJoined('proposals.reviews.reviewer')
      .where('advisorEmail', email);

    const advisorFormatted = advisorClasses.map((classes) => ({
      id: classes.id,
      name: classes.name,
      startDate: classes.startDate,
      endDate: classes.endDate,
    }));

    const reviewerFormatted = reviewerClasses.map((classes) => ({
      id: classes.id,
      name: classes.name,
      startDate: classes.startDate,
      endDate: classes.endDate,
    }));

    return response.json({
      ...coordinator,
      advisorClasses: advisorFormatted,
      reviewerClasses: reviewerFormatted,
    });
  }
}

module.exports = new ProfessorController();
