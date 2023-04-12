const Model = require('./index');

class Student extends Model {
  static get tableName() {
    return 'students';
  }

  static get idColumn() {
    return 'userEmail';
  }

  static get relationMappings() {
    const Proposal = require('./Proposal');
    const User = require('./User');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'students.userEmail',
          to: 'users.email',
        },
      },
      proposals: {
        relation: Model.HasManyRelation,
        modelClass: Proposal,
        join: {
          from: 'students.userEmail',
          to: 'proposals.studentEmail',
        },
      },
    };
  }
}

module.exports = Student;
