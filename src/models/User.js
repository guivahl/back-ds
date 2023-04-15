const Model = require('./index');

const visibilityPlugin = require('objection-visibility').default;

class User extends visibilityPlugin(Model) {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'email';
  }

  static get hidden() {
    return 'password';
  }

  static get relationMappings() {
    const Student = require('./Student');
    const Admin = require('./Admin');
    const Professor = require('./Professor');
    return {
      student: {
        relation: Model.HasOneRelation,
        modelClass: Student,
        join: {
          from: 'users.email',
          to: 'students.userEmail',
        },
      },
      admin: {
        relation: Model.HasOneRelation,
        modelClass: Admin,
        join: {
          from: 'users.email',
          to: 'admins.userEmail',
        },
      },
      professor: {
        relation: Model.HasOneRelation,
        modelClass: Professor,
        join: {
          from: 'users.email',
          to: 'professors.userEmail',
        },
      },
    };
  }
}

module.exports = User;
